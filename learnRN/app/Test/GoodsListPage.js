/**
 * 货品-数据列表
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
    AppRegistry
} from 'react-native';
import BaseViewController from '../../baseView/BaseViewController';
import SaveGoodsPage from './SaveGoodsPage';
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

export default class GoodsListPage extends BaseViewController{

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
            hasIdOpen: false,
        }

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
                    title = "货品"/>
                {this.renderHeader()}
                {list && list.length > 0 &&
                    <ListView
                        style = {{flex:1}}
                        pageSize={pageSize}
                        refreshControl = {this.renderRefreshControl()}
                        dataSource={this.dataSourceCreator.cloneWithRows(list)}
                        renderRow={this.renderRow.bind(this)}
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
                <Text style={{flex:1,textAlign:'center',fontSize:12}}>名称</Text>
                <Text style={{flex:1,textAlign:'center',fontSize:12}}>规格</Text>
                <Text style={{flex:1,textAlign:'center',fontSize:12}}>单位</Text>
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
                    style={styles.listRow}
                    onPress={()=>this.onEditRow(data)}>
                    <View style={styles.column}>
                        <Text style={{color: 'coral',fontSize:14}}>{data.goodsname}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={{color: '#555',fontSize:14}}>{data.standard}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={{color: '#555',fontSize:14}}>{data.unit}</Text>
                    </View>
                </TouchableOpacity>
            </SwipeitemView>
        )
    }

    _rightButtons() {
        return [{
            id: 1,
            text: '删 除',
            width: 80,
            bgColor: 'orangered',
            underlayColor: '#ffffff',
            onPress: ()=>{this.deleteRow(this.openRowId)},
        }]
    }

    deleteRow(id){
        this.progressDialog.show('正在删除...');
        Api.deleteData(Urls.DELETE_GOODS,{id:id})
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
        this.pushViewController(SaveGoodsPage,{
            isEditMode:true,
            data:data,
            onSaveSuccess:() => {
                this.setState({isLoading:false});
                this.onRefresh();
            }});
    }

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

    onActionSelected(action){
        switch (action.id) {
            case ID_ADD:
                this.pushViewController(SaveGoodsPage,{onSaveSuccess:() => {
                    this.setState({isLoading:false});
                    this.onRefresh();
                }});
                break;
            case NavigationBar.ACTION_BACK:
                this.onBackPressed();
                break;
            default:
                break;
        }
    }

    onClickFooter(){
        let {isLoading,pageNumber} = this.state;
        if(!isLoading && pageNumber < this.totalPage){
            this.fetchGoodsList(pageNumber +1);
        }
    }


    onRefresh(){
        if(!this.state.isLoading){
            this.openRowId && this._dataRow[this.openRowId].closeRow();
            this.setState({isRefreshing:true});
            this.fetchGoodsList(1,true);
        }
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(()=>{
            this.fetchGoodsList();
        });
    }

    /**
     * 获取货品列表
     * @param pageNumber
     * @param refresh
     */
    fetchGoodsList(pageNumber = 1,refresh = false){
        this.setState({
            isLoading:true,
            loadingText:'正在加载...'
        });
        Api.fetchGoodsList({pageNumber,pageSize})
            .then(goodsList => {
                let {totalPage,list} = goodsList;
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
