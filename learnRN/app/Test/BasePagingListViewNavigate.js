/**
 * 带导航栏的列表页父类（分页）
 * Created by bruce on 2017/08/14.
 */

import React from 'react';
import {
    View,
    Text
} from 'react-native';
import BasePagingListView from './BasePagingListView';
import {NavigationBar} from '../../components';

export default class BasePagingListViewNavigate extends BasePagingListView{

    title = null; //string,导航栏标题
    subtitle = null; //string,导航栏副标题
    navigationBarActions = null; //array,导航栏菜单项

    render(){
        return (
            <View style={this.getStyles().container}>
                <NavigationBar
                    actions = {this.navigationBarActions}
                    onActionSelected={this.onActionSelected.bind(this)}
                    navigator={this.getNavigator()}
                    renderTitleView={this.renderTitleView.bind(this)}/>
                {this.renderContent()}
            </View>
        );
    };

    renderTitleView(){
        return (
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize: this.subtitle ? 16 : 20, color:'white'}}>{this.title}</Text>
                {this.subtitle &&
                <Text style={{fontSize:11,color:'white'}}>{this.subtitle}</Text>
                }
            </View>
        )
    }

    onActionSelected(action){
        let resolved = false;
        switch (action.id) {
            case NavigationBar.ACTION_BACK:
                this.onBackPressed();
                resolved = true;
                break;
            default:
                resolved = false;
                break;
        }
        return resolved;
    }

}
