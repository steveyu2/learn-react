/**
 * 商品报价列表
 * Created by bruce on 2017/01/01.
 */

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ListView,
} from 'react-native';
import BasePagingListViewNavigate from "../../baseView/BasePagingListViewNavigate";
import SaveGoodsBaojiaPage from './SaveGoodsBaojiaPage';
import BaojiaEditDialog from './BaojiaEditDialog';
import {ActionProgressDialog} from '../../../components/index';
import R from '../../../common/R';
import Api from '../../../common/Api';
import SwipeitemView from 'react-native-swipe-left';
const ID_ADD = 'ID_ADD';

export default class GoodsListPage extends BasePagingListViewNavigate{

    constructor(props) {
        super(props);
        this.title = '商品报价';
        this.navigationBarActions = [{icon: 'add',id:ID_ADD}];
        this.fetchPagingListApi = Api.fetchGoodsBaojiaPage;
        this.queryParam = props.queryParam;
    }

    renderTopBar(){
        return (
            <View style={styles.listHeader}>
                <Text style={{flex:2,textAlign:'center',fontSize:12}}>名称</Text>
                <Text style={{flex:1,textAlign:'center',fontSize:12}}>报价</Text>
                <Text style={{flex:1,textAlign:'center',fontSize:12}}>过水</Text>
                <Text style={{flex:1,textAlign:'center',fontSize:12}}>店存</Text>
                <Text style={{flex:1,textAlign:'center',fontSize:12}}>操作</Text>
            </View>
        );
    }

    renderRow(data,sectionID,rowID){
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.listRow}
                onPress={()=>{this.onPressRow(data)}}>
                <View style={[styles.column,{flex:2}]}>
                    <Text style={{color: 'coral',fontSize:14}}>{data.anothername}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={{color: '#555',fontSize:14}}>{data.baojia}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={{color: '#555',fontSize:14}}>{data.guoshui}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={{color: '#555',fontSize:14}}>{data.diancun}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={{color: '#555',fontSize:14}}>禁用</Text>
                </View>

            </TouchableOpacity>
        )
    }


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

}

const styles = StyleSheet.create({
    listHeader:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'azure',
        paddingVertical:3,
        borderColor:R.color.stroke,
        borderBottomWidth:StyleSheet.hairlineWidth
    },
    listRow:{
        flexDirection:'row',
        backgroundColor:'white',
        borderColor: R.color.stroke,
        borderBottomWidth:StyleSheet.hairlineWidth,
        paddingVertical:5
    },
    column:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:8,
    },
});
