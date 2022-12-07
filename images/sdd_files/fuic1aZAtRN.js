if (self.CavalryLogger) { CavalryLogger.start_js(["ijdjQ"]); }

__d("AbstractTextArea.react",["cx","AbstractTextField.react","React","TextAreaControl","prop-types"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").Component;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$6=function(){c.$2&&c.$2.onupdate()},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidUpdate=function(){this.$4()};d.componentWillUnmount=function(){window.cancelAnimationFrame(this.$3),this.$3=null,this.$2=null};d.render=function(){var a=this;return b("React").jsx(b("AbstractTextField.react"),babelHelpers["extends"]({},this.props,{children:b("React").jsx("textarea",{className:"_58an",onClick:this.props.onClick,onMouseDown:this.props.onMouseDown,onKeyUp:this.props.onKeyUp,rows:this.props.rows,tabIndex:this.props.tabIndex,ref:function(b){a.$1=b,a.$5()}})}))};d.$4=function(){this.$1&&this.$1.offsetParent!=null?this.$6():(window.cancelAnimationFrame(this.$3),this.$3=window.requestAnimationFrame(this.$6))};d.$5=function(){if(this.$1&&this.props.autoGrow&&!this.$2){var a=new(b("TextAreaControl"))(this.$1);a.setAutogrow(!0);this.$4();this.$2=a}};d.focusInput=function(){this.$1&&this.$1.focus()};d.blurInput=function(){this.$1&&this.$1.blur()};d.getTextFieldDOM=function(){return this.$1};d.getValue=function(){return this.$1?this.$1.value:""};return c}(a);c.propTypes=babelHelpers["extends"]({},b("AbstractTextField.react").propTypes,{autoGrow:b("prop-types").bool});e.exports=c}),null);
__d("RoundImage.react",["cx","Image.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("joinClasses")(this.props.className,c.baseClassName);return b("React").jsx(b("Image.react"),babelHelpers["extends"]({},this.props,{className:a}))};return c}(b("React").Component);a.baseClassName="_2qgu";e.exports=a}),null);
__d("Pleasantville.react",["React","ReactDOM","VideoPlayerHTML5Api","VideoPlayerReactConfig","requireWeak","HTML5OzDrmHelper"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.offsetType;a=a.offsetValue;var d=null,e=null;c=="horizontal"?e=a:c=="vertical"&&(d=a);return b("React").jsx("video",{ref:"video",muted:this.props.startMuted,className:this.props.className,"data-video-width":this.props.width||"","data-video-height":this.props.height||"",style:{top:d,left:e}})};d.getVideoPlayerInitArgs=function(){var a,c;b("requireWeak")("VideoPlayerHTML5Shaka",function(b){return a=b});b("requireWeak")("VideoPlayerHTML5Oz",function(a){return c=a});var d=this.props.videoData.getPlayerVersionOverwrite()==="oz"?c||a:a,e=this.props.videoData.getDRMHelper()!=null?b("HTML5OzDrmHelper"):null;e={videoLicenseUriMap:this.props.videoData.getVideoLicenseUriMap(),graphApiVideoLicenseUri:this.props.videoData.getGraphApiVideoLicenseUri(),OzDrmHelper:e,VideoPlayerHTML5Shaka:d,disableNativeControls:!0,subtitlesActive:this.props.showSubtitles,minQuality:this.props.forceHD?"hd":b("VideoPlayerReactConfig").defaultQuality,unloadShouldCancelPendingRequest:!0,initialRepresentationIds:this.props.initialRepresentationIds};return{apiConfig:e,apiModule:b("VideoPlayerHTML5Api"),videoElement:b("ReactDOM").findDOMNode(this.refs.video)}};return c}(b("React").Component);e.exports=a}),null);
__d("XVideoDataAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/video_data_async/",{video_id:{type:"String",required:!0},width:{type:"Int"},height:{type:"Int"},scrubbing_preference:{type:"Int"},source:{type:"String"},preferred_projection:{type:"Enum",enumType:1},supports_html5_video:{type:"Bool",defaultValue:!0},is_ad:{type:"Bool",defaultValue:!1},force_flash:{type:"Bool",defaultValue:!1},is_omnistab_preview_select_revert:{type:"Bool",defaultValue:!1},allow_dash_prefetch:{type:"Bool",defaultValue:!1},force_hd:{type:"Bool",defaultValue:!1},host_number:{type:"Int"},include_extra_drm_info:{type:"Bool",defaultValue:!0}})}),null);
__d("VideoDataAsyncControllerUri",["XVideoDataAsyncController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){}var c=a.prototype;c.getURI=function(a,c,d,e,f,g,h,i){a=b("XVideoDataAsyncController").getURIBuilder().setString("video_id",a.toString()).setBool("supports_html5_video",c);d!==void 0&&(a=a.setBool("force_flash",d));e!==void 0&&(a=a.setBool("allow_dash_prefetch",e));f!==void 0&&(a=a.setBool("force_hd",f));g!==void 0&&(a=a.setInt("host_number",g));h!==void 0&&(a=a.setBool("include_extra_drm_info",h));i!==void 0&&(a=a.setString("source",i));return a.getURI()};return a}();e.exports=a}),null);
__d("fetchStaticQuery",["RelayRuntime"],(function(a,b,c,d,e,f){"use strict";var g=b("RelayRuntime").getRequest,h=b("RelayRuntime").__internal.getOperationVariables;function a(a,b,c,d){b=g(b);c=h(b.operation,c);return a.execute(b.params,c,d||{}).toPromise()}e.exports=a}),null);
__d("VideoComponent",["CurrentUser","ErrorBoundary.react","React","RelayFBNetwork","SubscriptionsHandler","fetchStaticQuery","setImmediate"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){return a.displayName||a.name||"Component"}function a(a,c){__p&&__p();var d,e=c||{},f=e.observedVpcEvents||[],h=e.suppressMount||function(){return!1},i=g(a);return d=c=function(c){__p&&__p();babelHelpers.inheritsLoose(d,c);function d(a){__p&&__p();var b;b=c.call(this,a)||this;b.$7=function(){if(b.$2&&b.$2.length&&b.refs.component){var a={time:Date.now(),queuedEvents:b.$2};b.setState({vpcEventInfo:a});b.$2=[]}};b.state={video:null,user:null,vpcEventInfo:{time:0,queuedEvents:[]}};b.$2=[];return b}var g=d.prototype;g.render=function(){return this.$3()?null:b("React").jsx(b("ErrorBoundary.react"),{onHandleError:function(a,b){},children:b("React").jsx(a,babelHelpers["extends"]({ref:"component"},this.props,{vpcEventInfo:this.state.vpcEventInfo,video:this.state.video,user:this.state.user}))})};g.enable=function(a){__p&&__p();if(this.$3())return;this.vpc=a;this.$1=new(b("SubscriptionsHandler"))();this.$4(a);var c=this.refs.component;if(!c)return;if(!c.enable)throw new TypeError(i+" must implement enable(VideoPlayerController)");c.enable(a);this.$5(a.getVideoID(),e.videoGraphQLQuery)};g.disable=function(){if(this.$3())return;var a=this.refs.component;if(!a)return;if(!a.disable)throw new TypeError(i+" must implement disable()");a.disable();this.$1&&this.$1.release()};g.$3=function(){return h(this.props.videoData)};g.$5=function(a,c){var d=this;if(!a||!c)return;b("fetchStaticQuery")(b("RelayFBNetwork"),c,{videoID:a,userID:b("CurrentUser").getID()},{force:!0}).then(function(a){a=a.data;var b=a.video;a=a.user;d.vpc&&b&&d.refs.component&&b.id==d.vpc.getVideoID()&&d.setState({video:b});a&&d.refs.component&&d.setState({user:a})})};g.$4=function(a){__p&&__p();var b=this,c=function(){__p&&__p();if(e){if(g>=d.length)return"break";h=d[g++]}else{g=d.next();if(g.done)return"break";h=g.value}var c=h,f=a.addListener(c,function(){return b.$6(c)});b.$1.addSubscriptions(f)};for(var d=f,e=Array.isArray(d),g=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h,i=c();if(i==="break")break}};g.$6=function(a){this.$2.length||b("setImmediate")(this.$7),this.$2.push(a)};return d}(b("React").Component),c.displayName="VideoComponent("+i+")",d}e.exports={createContainer:a}}),null);
__d("VideoWithClickPlayPause",["logVideosClickTracking"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=a,this.$2=this.$1.getVideoNode(),this.$1.addListener("clickVideo",this.$3.bind(this)),this.$1.hasSeenClick()&&this.$3()}var c=a.prototype;c.$3=function(){var a=this.$1.getOption("CommercialBreakVideoAdOverlay","videoController");if(this.$1.isState("playing")){if(this.$1.getOption("VideoWithLiveBroadcast","isLive")||a&&a.getOption("VideoWithLiveBroadcast","isLive")||this.$4()||this.$5())return;this.$1.pause("user_initiated")}else b("logVideosClickTracking")(this.$2),this.$1.play("user_initiated")};c.$4=function(){var a=this.$1.getOption("CommercialBreakVideoAdOverlay","videoController");a=a&&a.getOption("VideoWithInstreamVideo","controller");return a&&!a.getConfig().canPauseAdBreak};c.$5=function(){return this.$1.getOption("VideoWithInstreamVideo","disableClickToPause")};return a}();e.exports=a}),null);
__d("VideoComponentClickPlayPause.react",["React","VideoComponent","VideoWithClickPlayPause"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.enable=function(a){new(b("VideoWithClickPlayPause"))(a)};d.disable=function(){};d.shouldComponentUpdate=function(){return!1};d.render=function(){return null};return c}(b("React").Component);e.exports=b("VideoComponent").createContainer(a)}),null);
__d("VideoComponentSphericalVideoHeadingIndicator.react",["cx","Bootloader","React","VideoComponent"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){b=a.call(this,b)||this;b.state={enabled:!1};return b}var d=c.prototype;d.enable=function(a){var c=this;if(!this.props.videoData.isSpherical())return;this.setState({enabled:!0},function(){b("Bootloader").loadModules(["VideoSphericalHeadingIndicator"],function(b){var d=c.props.videoData.getSphericalConfig();new b(a,c.refs.root,d.initialHeading,d.initialPitch,d.fieldOfView)},"VideoComponentSphericalVideoHeadingIndicator.react")})};d.disable=function(){this.setState({enabled:!1})};d.render=function(){return!this.state.enabled?null:b("React").jsx("div",{className:"_3lfe",ref:"root"})};return c}(b("React").Component);e.exports=b("VideoComponent").createContainer(a)}),null);
__d("VideoComponentSphericalVideoOverlay.react",["cx","Bootloader","React","VideoComponent"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){b=a.call(this,b)||this;b.state={enabled:!1};return b}var d=c.prototype;d.enable=function(a){var c=this;if(!this.props.videoData.isSpherical())return;this.setState({enabled:!0},function(){b("Bootloader").loadModules(["VideoSphericalOverlay"],function(b){c.$1&&c.$2&&c.$3&&new b(a,c.$1,c.$2,!1,c.$3)},"VideoComponentSphericalVideoOverlay.react")})};d.disable=function(){this.setState({enabled:!1})};d.render=function(){var a=this;return!this.state.enabled?null:b("React").jsxs("div",{className:"_1-s8",children:[b("React").jsx("div",{className:"_1zvy",ref:function(b){a.$1=b}}),b("React").jsx("div",{className:"_2660",ref:function(b){a.$2=b}}),b("React").jsx("div",{className:"_236i",ref:function(b){a.$3=b}})]})};return c}(b("React").Component);e.exports=b("VideoComponent").createContainer(a)}),null);
__d("VideoComponentSphericalVideoSpatialAudioController.react",["Bootloader","React","VideoComponent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.enable=function(a){__p&&__p();var c=this;if(!this.props.videoData.isSpherical())return;var d=this.props.videoData.getSphericalConfig();if(!d.hasSpatialAudio===!0)return;b("Bootloader").loadModules(["SphericalVideoSpatialAudioController"],function(d){var b=c.props.videoData.getSphericalConfig(),e=b.spatialAudioBufferParameters,f=b.canUseSpatialAudio,g=b.focusEnabled,h=b.offFocusLevelDB,i=b.focusWidth;b=b.remapChannelsForSevenPointOne;c.$1=new d(e,f,g,h,i,!1,b,!1,!1,null);c.$1.enable(a)},"VideoComponentSphericalVideoSpatialAudioController.react")};d.disable=function(){this.$1&&this.$1.destroy()};d.render=function(){return null};return c}(b("React").Component);e.exports=b("VideoComponent").createContainer(a)}),null);
__d("VideoComponentWithSphericalRecenterControl.react",["Bootloader","React","VideoComponent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.enable=function(a){var c=this;if(!this.props.videoData.isSpherical())return;b("Bootloader").loadModules(["SphericalVideoRecenterControl"],function(b){var d=c.props.videoData.getSphericalConfig();c.$1=new b(a,d.initialHeading,d.initialPitch)},"VideoComponentWithSphericalRecenterControl.react")};d.disable=function(){this.$1&&this.$1.destroy()};d.render=function(){return null};return c}(b("React").Component);e.exports=b("VideoComponent").createContainer(a)}),null);
__d("VideoComponentWithSphericalVideoPlayer.react",["Bootloader","React","VideoComponent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.enable=function(a){var c=this;if(!this.props.videoData.isSpherical())return;b("Bootloader").loadModules(["SphericalVideoPlayer"],function(b){var d=c.props.videoData.getSphericalConfig();c.$1=new b(d,{eagerPreload:!0,useContainerDimensions:!0});c.$1.enable(a)},"VideoComponentWithSphericalVideoPlayer.react")};d.disable=function(){this.$1&&this.$1.disable()};d.render=function(){return null};return c}(b("React").Component);e.exports=b("VideoComponent").createContainer(a)}),null);
__d("VideoResizeMode",[],(function(a,b,c,d,e,f){"use strict";e.exports={FIT:"FIT",COVER_HEIGHT:"COVER_HEIGHT"}}),null);
__d("VideoPlayer.react",["cx","FBOverlayBase.react","FBOverlayContainer.react","FBOverlayElement.react","Pleasantville.react","React","ReactDOM","VideoComponentClickPlayPause.react","VideoComponentSphericalVideoHeadingIndicator.react","VideoComponentSphericalVideoOverlay.react","VideoComponentSphericalVideoSpatialAudioController.react","VideoComponentWithSphericalRecenterControl.react","VideoComponentWithSphericalVideoPlayer.react","VideoPlayerController","VideoPlayerShakaGlobalConfig","VideoResizeMode","joinClasses","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a={showCaptionsDefault:!1,onUpdateMetadata:function(){},onVideoClick:function(){},autoplay:!1,autoplayReason:"unknown",autoplaySetting:"autoplay_setting_www",forceHD:!1,startMuted:!1,isUnmountScheduled:!1,videoResizeMode:b("VideoResizeMode").FIT,allowCrossPageTransition:!1,disableClickPlayPause:!1,disableSphericalComponents:!1};c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this,c)||this;d.$4=function(){d.vpcCleanedup||(d.vpc.pause("unloaded"),d.vpc.destroy({disableStillFrame:!0}),d.vpcCleanedup=!0)};d.$7=function(a,c){var e=babelHelpers["extends"]({},d.props,{videoID:d.props.videoData.getVideoID(),ref:d.$8.bind(babelHelpers.assertThisInitialized(d),c.toString())});return b("React").jsx(b("FBOverlayElement.react"),{children:b("React").cloneElement(a,e)},c)};d.componentRefs=new Map();d.state={isFullscreen:!1};return d}var d=c.prototype;d.componentDidMount=function(){this.vpc=this.$1(this.refs.video.getVideoPlayerInitArgs(),this.props.videoData)};d.componentDidUpdate=function(a){var c=this;b("VideoPlayerShakaGlobalConfig").getNumber("www_video_autoplay_register_unregister_callback_v",0)!==0&&(!a.isAutoplayEnabledForRegisterCallback&&this.props.isAutoplayEnabledForRegisterCallback?this.props.registerAutoplayCallback&&this.props.registerAutoplayCallback(this):a.isAutoplayEnabledForRegisterCallback&&!this.props.isAutoplayEnabledForRegisterCallback&&(this.props.unregisterAutoplayCallback&&this.props.unregisterAutoplayCallback()));this.$2(a)&&(this.$3(this.vpc),this.vpc=this.$1(this.refs.video.getVideoPlayerInitArgs(),this.props.videoData));a.isUnmountScheduled!==this.props.isUnmountScheduled&&this.props.isUnmountScheduled&&this.vpc.runOnceOnApiEventLogged("started_playing",function(){b("setTimeoutAcrossTransitions")(c.$4,0);return})};d.componentWillUnmount=function(){this.$3(this.vpc)};d.play=function(a){var b=this.vpc;b&&b.play(a)};d.pause=function(a){var b=this.vpc;b&&b.pause(a)};d.$5=function(){__p&&__p();var a=[];if(!this.props.disableSphericalComponents){var c;a.push((c=b("React")).jsx(b("VideoComponentWithSphericalVideoPlayer.react"),{}));a.push(c.jsx(b("VideoComponentWithSphericalRecenterControl.react"),{}));a.push(c.jsx(b("VideoComponentSphericalVideoHeadingIndicator.react"),{}));a.push(c.jsx(b("VideoComponentSphericalVideoOverlay.react"),{}));a.push(c.jsx(b("VideoComponentSphericalVideoSpatialAudioController.react"),{}))}this.props.disableClickPlayPause||a.push(b("React").jsx(b("VideoComponentClickPlayPause.react"),{}));return a};d.$3=function(a){__p&&__p();if(a){for(var b=this.componentRefs.values(),c=Array.isArray(b),d=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=b.length)break;e=b[d++]}else{d=b.next();if(d.done)break;e=d.value}e=e;e.disable()}a.runOnApiReady(this.$4)}};d.$2=function(a){var b=a.videoData.getVideoID()!==this.props.videoData.getVideoID();a=a.videoData.getPlayableSrcSD()!==this.props.videoData.getPlayableSrcSD();return b||a};d.$1=function(a,c){__p&&__p();var d=this,e=a.apiConfig,f=a.apiModule;a=a.videoElement;this.vpcCleanedup=!1;e.videoData=[c.getRawData()];e.startTimestamp=this.props.startTimestamp;var g=new(b("VideoPlayerController"))({source:this.props.subOrigin,playerOrigin:this.props.playerOrigin||null,playerSuboriginDerived:this.props.subOriginDerived,reaction_video_channel_type:this.props.reactionVideoChannelType,reaction_video_channel_subtype:this.props.reactionVideoChannelSubtype,autoplay_reason:this.props.autoplayReason,autoplay_setting:this.props.autoplaySetting,apiModule:f,apiConfig:e,should_autoplay:!this.props.isUnmountScheduled&&this.props.autoplay,player_version:this.props.videoData.getPlayerVersionOverwrite(),video_ids:[c.getVideoID()],allowCrossPageTransition:this.props.allowCrossPageTransition,isReactPlayer:!0,video_url:c.getVideoURL(),isBroadcast:c.isBroadcast(),upstreamPlayerSource:this.props.upstreamPlayerSource||null,livingRoomSessionID:this.props.livingRoomSessionID,customLoggingProps:this.props.customLoggingProps,keepPlayingOnDialog:this.props.keepPlayingOnDialog,isChainedLivingRoom:this.props.isChainedLivingRoom,liveLinearChannelId:this.props.liveLinearChannelId,isReplayLivingRoom:this.props.isReplayLivingRoom,customLiveManifestUrlParams:this.props.isLiveClipPreview?{cp:"1",msx:"m_CT"}:null,positionInUnit:this.props.positionInUnit},{root_element:b("ReactDOM").findDOMNode(this.refs.root),container_element:b("ReactDOM").findDOMNode(this.refs.container),video_element:b("ReactDOM").findDOMNode(a)});for(var f=this.componentRefs.values(),e=Array.isArray(f),c=0,f=e?f:f[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(e){if(c>=f.length)break;a=f[c++]}else{c=f.next();if(c.done)break;a=c.value}a=a;a.enable(g)}g.addListener("clickVideo",this.props.onVideoClick);g.addListener("toggleFullscreen",function(){return d.setState({isFullscreen:!!g.isFullscreen()})});g.addListener("updateMetadata",function(){return d.props.onUpdateMetadata(g)});this.props.onVpcUpdate!==null&&this.props.onVpcUpdate!==void 0&&this.props.onVpcUpdate(g);return g};d.$6=function(a){var c="_ox1";this.props.videoResizeMode==b("VideoResizeMode").COVER_HEIGHT?c="_ox1 _41l4":this.props.offsetType=="horizontal"?c="_ox1 _blh":this.props.offsetType=="vertical"&&(c="_ox1 _bli");if(a!==null&&a!==void 0)return b("joinClasses")(c,a);else return c};d.render=function(){__p&&__p();var a=this.props,c=a.width,d=a.height,e=a.tabIndex,f=a.videoData,g=a.startMuted,h=a.offsetValue,i=a.className;a=babelHelpers.objectWithoutPropertiesLoose(a,["width","height","tabIndex","videoData","startMuted","offsetValue","className"]);i=this.$6(i);var j=c!==void 0||d!==void 0;j&&(d&&(c=c||d*f.getAspectRatio()),c&&(d=d||c/f.getAspectRatio()));f=b("React").jsx(b("Pleasantville.react"),babelHelpers["extends"]({ref:"video",videoData:f,width:c,height:d,showSubtitles:this.props.showCaptionsDefault,className:i,startMuted:g,offsetValue:this.state.isFullscreen?0:h},a));i=j?{}:{width:"100%",height:"100%"};g=j?{width:(c||0)+"px",height:(d||0)+"px"}:{width:"100%",height:"100%"};return b("React").jsx("div",{ref:"root",tabIndex:e,className:"_1c_u",style:i,children:b("React").jsxs(b("FBOverlayContainer.react"),{ref:"container",className:"_53j5",style:g,children:[b("React").jsx(b("FBOverlayBase.react"),{children:f}),b("React").Children.toArray(this.$5().concat(this.props.children)).filter(function(a){return a!=null}).map(this.$7)]})})};d.$8=function(a,b){!b?this.componentRefs["delete"](a):this.componentRefs.set(a,b)};return c}(b("React").Component);c.defaultProps=a;e.exports=c}),null);
__d("VideoPlayerMetaData",["regeneratorRuntime","Promise","ActorURI","AsyncRequest","TimeSlice","VideoData","VideoDataAsyncControllerUri","clearTimeout","isHTML5VideoImplementationUnavailable","setTimeout"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={},h=12e4;a=function(){__p&&__p();function a(a){this.videoID=a}var c=a.prototype;c.getVideoID=function(){return this.videoID};c.genVideoData=function(a,c,d){__p&&__p();var e=this,f;return b("regeneratorRuntime").async(function(g){__p&&__p();while(1)switch(g.prev=g.next){case 0:g.prev=0;f=this.$1;(!f||a.forceRefetch)&&(this.$2&&(b("clearTimeout")(this.$2),this.$2=null),f=this.$1=this.$3(a,c),this.$2=b("setTimeout")(b("TimeSlice").guard(function(){e.$1=null,d()},"VideoPlayerMetaData cacheTimeout",{propagationType:b("TimeSlice").PropagationType.ORPHAN}),a.cacheTimeout||h));g.next=5;return b("regeneratorRuntime").awrap(f);case 5:return g.abrupt("return",g.sent);case 8:g.prev=8;g.t0=g["catch"](0);throw g.t0;case 11:case"end":return g.stop()}},null,this,[[0,8]])};c.$3=function(a,c){__p&&__p();var d;d=(d=a==null?void 0:a.uriBuilder)!=null?d:new(b("VideoDataAsyncControllerUri"))();var e=a.forceFlash,f=a.allowDashPrefetch,g=a.forceHD,h=a.hostNumber,i=a.includeExtraDRMInfo;a=a.source;var j=d.getURI(this.videoID,!b("isHTML5VideoImplementationUnavailable")(!0),e,f,g,h,i,a);c!=null&&(j=b("ActorURI").create(j,c));return new(b("Promise"))(function(a,c){new(b("AsyncRequest"))(j).setMethod("GET").setURI(j).setReadOnly(!0).setAllowCrossPageTransition(!0).setHandler(function(d){d=d.payload;!d.error?a(new(b("VideoData"))(d)):c(d.error)}).setErrorHandler(function(a){c(a.getErrorDescription())}).send()})};a.get=function(b){g[b]||(g[b]=new a(b));return g[b]};a.genVideoData=function(c,d,e,f){__p&&__p();return b("regeneratorRuntime").async(function(g){while(1)switch(g.prev=g.next){case 0:d===void 0&&(d={});e===void 0&&(e=void 0);f===void 0&&(f=function(){});g.next=5;return b("regeneratorRuntime").awrap(a.get(c).genVideoData(d,e,f));case 5:return g.abrupt("return",g.sent);case 6:case"end":return g.stop()}},null,this)};return a}();e.exports=a}),null);
__d("VideoDataContainer.react",["cx","invariant","regeneratorRuntime","Promise","React","VideoData","VideoPlayer.react","VideoPlayerMetaData","VideoPlayerShakaGlobalConfig"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=!1,c.$2=null,c.state={errorData:null,isLoading:!0,prevVideoID:c.props.videoID,videoData:null},b)||babelHelpers.assertThisInitialized(c)}c.renderSpinner=function(a,c){return b("React").jsx("div",{className:"_53j5",style:{height:c,width:a},children:b("React").jsx("i",{className:"_5l7x"})})};c.getDerivedStateFromProps=function(a,b){return a.videoID!==b.prevVideoID?{errorData:null,isLoading:!0,prevVideoID:a.videoID,videoData:null}:null};var d=c.prototype;d.componentDidMount=function(){this.$3(this.props)};d.componentDidUpdate=function(a,b){if(a.actorID!==this.props.actorID||a.videoID!==this.props.videoID||((a=a.videoDataConfig)==null?void 0:a.hostNumber)!==((a=this.props.videoDataConfig)==null?void 0:a.hostNumber))this.$3(this.props);else if(b.videoData!==this.state.videoData){a=this.props.onVideoLoaded;typeof a==="function"&&a()}};d.componentWillUnmount=function(){this.$1=!0};d.render=function(){__p&&__p();var a=this.state,d=a.isLoading,e=a.videoData;a=a.errorData;if(a)return this.props.renderError?this.props.renderError(a):null;a=this.props.renderLoading;if(d&&a)return a();if(!e||e===c.VIDEO_DATA_PLACEHOLDER)return null;d=this.props.children;d!=null&&d.type===b("VideoPlayer.react")||h(0,2154);return b("React").cloneElement(d,{videoData:e})};d.$3=function(a){__p&&__p();var c=this,d,e;return b("regeneratorRuntime").async(function(f){__p&&__p();while(1)switch(f.prev=f.next){case 0:this.$2=a.videoID;d=null;e=null;if(!(b("VideoPlayerShakaGlobalConfig").getBool("living_room_optimize_raw_video_data_requests",!1)&&a.rawVideoData&&a.videoID===a.rawVideoData.video_id)){f.next=5;break}return f.abrupt("return",b("Promise").resolve().then(function(){!c.$1&&!a.isUnmountScheduled&&c.$2===a.videoID&&c.setState({videoData:new(b("VideoData"))(a.rawVideoData),isLoading:!1})}));case 5:f.prev=5;f.next=8;return b("regeneratorRuntime").awrap(b("VideoPlayerMetaData").genVideoData(a.videoID,a.videoDataConfig,a.actorID));case 8:e=f.sent;if(!(this.$2!==a.videoID)){f.next=11;break}return f.abrupt("return");case 11:if(!(this.$1||a.isUnmountScheduled)){f.next=13;break}return f.abrupt("return");case 13:if(!(this.$2!==a.videoID)){f.next=15;break}return f.abrupt("return");case 15:f.next=20;break;case 17:f.prev=17,f.t0=f["catch"](5),d=f.t0;case 20:this.$1||(d!==null?this.setState({errorData:d}):this.setState({videoData:e,isLoading:!1}));case 21:case"end":return f.stop()}},null,this,[[5,17]])};return c}(b("React").Component);a.VIDEO_DATA_PLACEHOLDER=new(b("VideoData"))();e.exports=a}),null);
__d("VideoCover",["invariant","Promise","Animation","Bootloader","CSS","EventListener","SubscriptionsHandler","promiseDone","setTimeout"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,c,d,e,f,h){__p&&__p();var i=this;e===void 0&&(e=null);f===void 0&&(f=!1);h===void 0&&(h=0);this.$7=new(b("SubscriptionsHandler"))();this.$15=function(){i.$5&&b("CSS").show(i.$1)};this.$16=function(){i.$5&&b("CSS").hide(i.$1)};this.$11=function(){i.$3!=null&&i.$3.length>0?b("Bootloader").loadModules(["PhotoSnowlift"],function(a){return a.bootstrap(i.$3)},"VideoCover"):i.$8&&i.$8.clickVideo()};this.$12=function(){i.$9&&i.$8&&!i.$8.hasSeenClick()?b("promiseDone")(new(b("Promise"))(function(a){return b("setTimeout")(a,i.$10)}),function(a){return i.$17()},function(a){return i.$17()}):b("CSS").hide(i.$1)};this.$14=function(){if(i.$8){var a=i.$8.getOption("Looping","isLooping");if(i.$4||a)return;b("CSS").show(i.$1)}};this.$13=function(){i.$8&&i.$8.isState("fallback")&&i.$6&&b("CSS").show(i.$1)};a instanceof Element||g(0,4829);this.$1=a;c[0]instanceof Element||g(0,4830);this.$2=c[0];this.$3=d;this.$9=f;this.$10=h;e&&(this.$4=e.hiddenAfterFinish,this.$5=e.showWhileBuffering,this.$6=e.showAfterFallback);b("EventListener").listen(this.$1,"click",this.$11)}var c=a.prototype;c.disable=function(){this.$7.release(),this.$8&&this.$8.unregisterOption("VideoCover","coverElement"),this.$8=null};c.enable=function(a){var b=this;this.$8=a;a.getState()==="playing"&&this.$12();this.$7.addSubscriptions(a.addListener("stateChange",this.$13),a.addListener("beginPlayback",this.$12),a.addListener("finishPlayback",this.$14),a.addListener("buffering",this.$15),a.addListener("buffered",this.$16));a.registerOption("VideoCover","coverElement",function(){return b.$1})};c.getCurrentCover=function(){return this.$2};c.setSnowLiftURI=function(a){this.$3=a};c.$17=function(){new(b("Animation"))(this.$1).from("opacity",1).to("opacity",0).duration(1e3).hide().go()};return a}();e.exports=a}),null);
__d("XPagesProfileReviewsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/{page_token}/reviews/",{page_token:{type:"String",required:!0},business_id:{type:"Int"},selected_snippet:{type:"String"},post_id:{type:"FBID"},referrer:{type:"String"},__nodl:{type:"Exists",defaultValue:!1},qr:{type:"String"},qr_code_id:{type:"FBID"},scan_session_id:{type:"String"},ref:{type:"String"},mt_nav:{type:"Bool",defaultValue:!1},msite_tab_async:{type:"Bool",defaultValue:!1},_sref_:{type:"Int"},_vref_:{type:"Int"}})}),null);