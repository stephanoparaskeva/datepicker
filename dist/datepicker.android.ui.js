"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _this=this,_jsxFileName="/Users/Stephano/Development/code/head/datepicker/dist/datepicker.android.ui.js";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function get(){return m[k];}});}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k];});var __setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:true,value:v});}:function(o,v){o["default"]=v;});var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod){if(k!=="default"&&Object.hasOwnProperty.call(mod,k))__createBinding(result,mod,k);}__setModuleDefault(result,mod);return result;};Object.defineProperty(exports,"__esModule",{value:true});var React=__importStar(require("react"));var react_native_1=require("react-native");var NativeDatePicker=react_native_1.requireNativeComponent("DatePickerManager");var DatePickerAndroid=function DatePickerAndroid(_ref){var onDateChange=_ref.onDateChange,onDateStringChange=_ref.onDateStringChange,maximumDate=_ref.maximumDate,minimumDate=_ref.minimumDate,date=_ref.date,timeZoneOffsetInMinutes=_ref.timeZoneOffsetInMinutes,style=_ref.style,props=(0,_objectWithoutProperties2.default)(_ref,["onDateChange","onDateStringChange","maximumDate","minimumDate","date","timeZoneOffsetInMinutes","style"]);var onChange=function onChange(event){var jsDate=fromIsoWithTimeZoneOffset(event.nativeEvent.date);onDateChange&&onDateChange(jsDate);if(onDateStringChange){onDateStringChange(event.nativeEvent.dateString);}};var checkMaximumDate=function checkMaximumDate(){return maximumDate&&toIsoWithTimeZoneOffset(maximumDate);};var checkMinimumDate=function checkMinimumDate(){return minimumDate&&toIsoWithTimeZoneOffset(minimumDate);};var giveDate=function giveDate(){return toIsoWithTimeZoneOffset(date);};var fromIsoWithTimeZoneOffset=function fromIsoWithTimeZoneOffset(propDate){if(timeZoneOffsetInMinutes===undefined){return new Date(propDate);}var newDate=new Date(propDate);newDate.setMinutes(newDate.getMinutes()-timeZoneOffsetInMinutes);return newDate;};var toIsoWithTimeZoneOffset=function toIsoWithTimeZoneOffset(propDate){if(timeZoneOffsetInMinutes===undefined){return new Date(propDate||new Date()).toISOString();}var newDate=new Date(propDate||new Date());newDate.setMinutes(newDate.getMinutes()+timeZoneOffsetInMinutes);return newDate.toISOString();};return React.createElement(NativeDatePicker,(0,_extends2.default)({},props,{date:giveDate(),minimumDate:checkMinimumDate(),maximumDate:checkMaximumDate(),onChange:onChange,style:[styles.picker,style],utc:timeZoneOffsetInMinutes!==undefined,__self:_this,__source:{fileName:_jsxFileName,lineNumber:52,columnNumber:13}}));};var styles=react_native_1.StyleSheet.create({picker:{width:310,height:180}});exports.default=DatePickerAndroid;