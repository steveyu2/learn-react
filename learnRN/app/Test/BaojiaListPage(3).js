/**
 * 商品报价列表
 * Created by bruce on 2017/01/01.
 */

import React,{PropTypes} from 'react';
import {
    View,
    Text,
    ListView,
    RefreshControl,
    InteractionManager,
    StyleSheet,
    PixelRatio,
    TouchableOpacity,
} from 'react-native';
import BasePagingListViewNavigate from "../../baseView/BasePagingListViewNavigate";
import SaveGoodsBaojiaPage from './SaveGoodsBaojiaPage';
import BaojiaEditDialog from './BaojiaEditDialog';
import {NavigationBar,PagingView,ActionProgressDialog,ContentLoadingProgress} from '../../../components/index';
import R from '../../../common/R';
import Api from '../../../common/Api';
import * as Urls from '../../../common/Urls';
import Toast from '@remobile/react-native-toast';
import SwipeitemView from 'react-native-swipe-left';

const ID_ADD = 'ID_ADD';
const ACTIONS = [
    {icon: 'add',id:ID_ADD},
];

const pageSize = 20;
export default class GoodsListPage extends BasePagingListViewNavigate{

    progressDialog;

    constructor(props){
        super(props);
        this._dataRow = {};
        this.totalPage = 0;
        this.openRowId = '';
        this.state = {
            loadingText:'暂无数据',
            isLoading:true,
            isRefreshing:false,
            pageNumber:1,
            list:[],
            hasIdOpen: false

        };
    }

    dataSourceCreator = new ListView.DataSource({
        rowHasChanged:(r1,r2) => r1 !== r2,
    });

    render(){
        let {isLoading,loadingText,list} = this.state;
        let {searchParam} = this.props;

        return (
            <View style = {styles.container}>
                <NavigationBar
                    actions = {searchParam?null:ACTIONS}
                    onActionSelected = {this.onActionSelected.bind(this)}
                    navigator={this.getNavigator()}
                    title = "商品报价"/>
                {this.renderHeader()}
                {list && list.length > 0 &&
                <ListView
                    style = {{flex:1}}
                    pageSize={pageSize}
                    refreshControl = {this.renderRefreshControl()}//拖拽刷新列表renderRefreshControl
                    dataSource={this.dataSourceCreator.cloneWithRows(list)}// 使用数据源实例化一个ListView组件,定义一个renderRow回调函数,...
                    renderRow={this.renderRow.bind(this)}//renderRow方法会返回一个可渲染的组件(该就是列表的每一行的item)
                    renderFooter = {this.renderFooter.bind(this)}
                    onEndReachedThreshold = {12}
                    onEndReached = {event => event && this.onClickFooter()}/>
                }

                {(!list || list.length == 0) &&
                <ContentLoadingProgress
                    isLoading={isLoading}
                    text={loadingText}
                />
                }
                <ActionProgressDialog
                    ref ={progressDialog => this.progressDialog = progressDialog}/>
            </View>
        );
    };

    renderHeader(){
        return (
            <View style={styles.listHeader}>
                <Text style={{flex:2,textAlign:'center',fontSize:12}}>名称</Text>
                <Text style={{flex:1,textAlign:'center',fontSize:12}}>报价</Text>
                <Text style={{flex:1,textAlign:'center',fontSize:12}}>过水</Text>
                <Text style={{flex:1,textAlign:'center',fontSize:12}}>店存</Text>
            </View>
        );
    }
    renderRow(data,sectionID,rowID){
        let rightBtn = this._rightButtons();
        let id = data.id;
        return (
            <SwipeitemView
                root={this}
                ref={(row)=>this._dataRow[id] = row}
                id={id}
                data={data}
                rightBtn={rightBtn}
            >
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.listRow}
                    onPress={()=>{this.onPressRow(data)}}>
                    <View style={[styles.column, {flex: 2}]}>
                        <Text style={{color: 'coral', fontSize: 14}}>{data.anothername}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={{color: '#555', fontSize: 14}}>{data.baojia}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={{color: '#555', fontSize: 14}}>{data.guoshui}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={{color: '#555', fontSize: 14}}>{data.diancun}</Text>
                    </View>
                </TouchableOpacity>

            </SwipeitemView>
        )
    }
////
    onPressRow(data){
        this.editDialog.show(Object.assign({},data));

    }
    renderExtraView(){
        return (
            <View>
                <BaojiaEditDialog
                    ref = { dialog => this.editDialog = dialog }
                    onClickOk = {()=>this.onEditOk()}/>

                <ActionProgressDialog
                    ref ={progressDialog => this.progressDialog = progressDialog}/>
            </View>
        )
    }

    onEditOk(){
        this.state.isLoading = false;
        this.onRefresh();
    }

    onActionSelected(action){
        let resolved = super.onActionSelected(action);
        if(!resolved){
            switch (action.id) {
                case ID_ADD:
                    let {fcorpid} = this.props.queryParam;
                    this.pushViewController(SaveGoodsBaojiaPage,{
                        fcorpid,
                        callback:() => {
                            this.setState({isLoading:false});
                            this.onRefresh();
                        }
                    });
                    break;
                default:
                    break;
            }
        }
    }


    _rightButtons() {
        return [{
            id: 1,
            text: '禁用',
            width: 80,
            bgColor: 'orangered',
            underlayColor: '#ffffff',
            onPress: ()=>{this.deleteRow(this.openRowId)},
        }]
    }

    deleteRow(id){
        this.progressDialog.show('正在禁用...');
        Api.deleteData(Urls.UPDATE_GOODSBAOJIA1,{id:id})
            .then(msg => {
                this.progressDialog.toast(msg);
                this._dataRow[id].closeRow();
                delete this._dataRow[id];
                this.openRowId = '';
                this.removeFromList(id);
            })
            .catch(msg => {
                this.progressDialog.toast(msg);
            });
    }

    removeFromList(id){
        let {list} = this.state;
        list = list.filter(item => {
            return item.id != id;
        });
        this.setState({list});
    }

    onEditRow(data){
       this.pushViewController(SaveGoodsBaojiaPage,{
            isEditMode:true,
            data:data,
            onSaveSuccess:() => {
                this.setState({isLoading:false});
                this.onRefresh();
            }});
    }
//
    renderRefreshControl(){
        return (
            <RefreshControl
                refreshing = {this.state.isRefreshing}
                onRefresh = {this.onRefresh.bind(this)}
                title={R.string.loading}
            />
        );
    }

    renderFooter(){
        let {isLoading,loadingText} = this.state;
        return this.totalPage>1? (
            <PagingView
                onPress={this.onClickFooter.bind(this)}
                isLoading = {isLoading}
                text = {loadingText}/>
        ):null;
    }

    // onActionSelected(action){
    //     switch (action.id) {
    //         case ID_ADD:
    //             this.pushViewController(SaveGoodsBaojiaPage,{onSaveSuccess:() => {
    //                 this.setState({isLoading:false});
    //                 this.onRefresh();
    //             }});
    //             break;
    //         case NavigationBar.ACTION_BACK:
    //             this.onBackPressed();
    //             break;
    //         default:
    //             break;
    //     }
    // }

    onClickFooter(){
        let {isLoading,pageNumber} = this.state;
        if(!isLoading && pageNumber < this.totalPage){
            this.fetchGoodsBaojiaPage(pageNumber +1);
        }
    }


    onRefresh(){
        if(!this.state.isLoading){
            this.openRowId && this._dataRow[this.openRowId].closeRow();
            this.setState({isRefreshing:true});
            this.fetchGoodsBaojiaPage(1,true);
        }
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(()=>{
            this.fetchGoodsBaojiaPage();
        });
    }

    /**
     * 获取商品列表
     * @param pageNumber
     * @param refresh
     */
    fetchGoodsBaojiaPage(pageNumber = 1,refresh = false){
        let fcorpid = this.props.queryParam.fcorpid
        this.setState({
            isLoading:true,
            loadingText:'正在加载...'
        });
        Api.fetchGoodsBaojiaPage({pageNumber,pageSize,fcorpid})
            .then(result => {
                let {totalPage,list} = result.page;
                if (this.totalPage == 0 || refresh){
                    this.totalPage = totalPage;
                }

                if(list.length>0){
                    let state = {pageNumber,list,isLoading:false,loadingText:'加载更多'};
                    if(pageNumber == totalPage){
                        Object.assign(state,{loadingText:'没有更多数据'});
                    }
                    if(refresh){
                        Object.assign(state,{isRefreshing:false});
                    }else{
                        Object.assign(state,{
                            list: [...this.state.list,...list]
                        });
                    }
                    this.setState(state);
                }else{
                    let state = {pageNumber,isLoading:false};
                    if(pageNumber == 1){
                        Object.assign(state,{loadingText:'暂无数据'});
                    }else{
                        Object.assign(state,{loadingText:'没有更多数据'});
                    }
                    this.setState(state);
                }
            })
            .catch(e=>{
                if(refresh){
                    this.setState({isRefreshing:false});
                    Toast.showShortCenter(e);
                }else{
                    this.setState({
                        isLoading:false,
                        loadingText:JSON.stringify(e),
                    });
                }
            });
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    listHeader:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'azure',
        paddingVertical:3,
        borderColor:R.color.stroke,
        borderBottomWidth:1/PixelRatio.get()
    },
    listRow:{
        flexDirection:'row',
        backgroundColor:'white',
        borderColor: R.color.stroke,
        borderBottomWidth:1/PixelRatio.get(),
        paddingVertical:5
    },
    column:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:8,
    },
});
