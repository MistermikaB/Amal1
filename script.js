(function(){
    var script = {
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "downloadEnabled": false,
 "children": [
  "this.MainViewer",
  "this.ThumbnailList_BE0B1540_B0FC_8095_41D0_57B6D371FC88",
  "this.IconButton_BA66234C_B6B5_9D23_41C4_F2D4591A4CA3"
 ],
 "propagateClick": false,
 "paddingBottom": 0,
 "gap": 10,
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "id": "rootPlayer",
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_BA66234C_B6B5_9D23_41C4_F2D4591A4CA3], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_BE0B1540_B0FC_8095_41D0_57B6D371FC88_playlist,this.mainPlayList])",
 "verticalAlign": "top",
 "layout": "absolute",
 "width": "100%",
 "desktopMipmappingEnabled": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "definitions": [{
 "items": [
  {
   "media": "this.panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_BE0B1540_B0FC_8095_41D0_57B6D371FC88_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_BA8A797C_B0CD_836D_41B6_DB09A73E53BB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_BE0B1540_B0FC_8095_41D0_57B6D371FC88_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BA8A797C_B0CD_836D_41B6_DB09A73E53BB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_BE0B1540_B0FC_8095_41D0_57B6D371FC88_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.album_A7CA7377_B0BD_877B_41CF_2B8FC2CD590F",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_BE0B1540_B0FC_8095_41D0_57B6D371FC88_playlist, 3)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_BE0B1540_B0FC_8095_41D0_57B6D371FC88_playlist, 3, 4)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_BE0B1540_B0FC_8095_41D0_57B6D371FC88_playlist, 4, 5)",
   "media": "this.album_BF7F74F6_B114_9F70_41D3_74F0C36038A0",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_BE0B1540_B0FC_8095_41D0_57B6D371FC88_playlist, 5, 6)",
   "media": "this.album_A3933CCF_B12D_AF90_41C2_252EADA907FC",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_BE0B1540_B0FC_8095_41D0_57B6D371FC88_playlist, 6, 7)",
   "media": "this.album_A57B581F_B135_96B1_41CF_0E8AFD27F1BD",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "media": "this.video_A3D82495_B12D_9FB1_41DF_A04375D10182",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_BE0B1540_B0FC_8095_41D0_57B6D371FC88_playlist, 7, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_BE0B1540_B0FC_8095_41D0_57B6D371FC88_playlist, 7)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_BE0B1540_B0FC_8095_41D0_57B6D371FC88_playlist, 7, 0)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "ThumbnailList_BE0B1540_B0FC_8095_41D0_57B6D371FC88_playlist",
 "class": "PlayList"
},
{
 "buttonCardboardView": "this.IconButton_BA66234C_B6B5_9D23_41C4_F2D4591A4CA3",
 "mouseControlMode": "drag_acceleration",
 "gyroscopeEnabled": true,
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "label": "Vid\u00e9o sans titre \u2010 R\u00e9alis\u00e9e avec Clipchamp",
 "scaleMode": "fit_inside",
 "width": 852,
 "loop": false,
 "id": "video_A3D82495_B12D_9FB1_41DF_A04375D10182",
 "thumbnailUrl": "media/video_A3D82495_B12D_9FB1_41DF_A04375D10182_t.jpg",
 "height": 480,
 "class": "Video",
 "video": {
  "width": 852,
  "mp4Url": "media/video_A3D82495_B12D_9FB1_41DF_A04375D10182.mp4",
  "height": 480,
  "class": "VideoResource"
 }
},
{
 "playList": "this.album_A3933CCF_B12D_AF90_41C2_252EADA907FC_AlbumPlayList",
 "label": "Photo Album Capture d'\u00e9cran 2024-12-10 155939",
 "thumbnailUrl": "media/album_A3933CCF_B12D_AF90_41C2_252EADA907FC_t.png",
 "id": "album_A3933CCF_B12D_AF90_41C2_252EADA907FC",
 "class": "PhotoAlbum"
},
{
 "propagateClick": false,
 "paddingBottom": 0,
 "gap": 10,
 "width": 400,
 "id": "window_BF945399_B113_79B1_41E1_25683F67398F",
 "bodyPaddingBottom": 0,
 "backgroundOpacity": 1,
 "verticalAlign": "middle",
 "titleFontWeight": "normal",
 "shadowSpread": 1,
 "scrollBarColor": "#000000",
 "titleFontFamily": "Arial",
 "borderRadius": 5,
 "titlePaddingBottom": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "modal": true,
 "veilColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "backgroundColorRatios": [],
 "headerPaddingTop": 10,
 "headerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "closeButtonIconWidth": 20,
 "closeButtonPressedIconLineWidth": 3,
 "height": 600,
 "class": "Window",
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "closeButtonBackgroundColor": [],
 "title": "",
 "headerBackgroundColorDirection": "vertical",
 "headerBorderColor": "#000000",
 "backgroundColor": [],
 "closeButtonIconLineWidth": 2,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeInEffect"
 },
 "contentOpaque": false,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonBorderRadius": 11,
 "scrollBarWidth": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "borderSize": 0,
 "closeButtonIconHeight": 20,
 "closeButtonPressedBackgroundColor": [],
 "scrollBarOpacity": 0.5,
 "closeButtonRollOverBackgroundColor": [],
 "titleTextDecoration": "none",
 "scrollBarVisible": "rollOver",
 "titlePaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColorDirection": "vertical",
 "veilColorDirection": "horizontal",
 "bodyBackgroundOpacity": 0,
 "paddingRight": 0,
 "children": [
  "this.container_B88477D3_B6B4_A526_41E5_9946CA92A091"
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "titleFontSize": "1.29vmin",
 "titlePaddingLeft": 5,
 "shadowColor": "#000000",
 "layout": "vertical",
 "headerBorderSize": 0,
 "shadowVerticalLength": 0,
 "closeButtonBackgroundColorRatios": [],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "duration": 500,
  "class": "FadeOutEffect"
 },
 "footerHeight": 5,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "titleFontStyle": "normal",
 "footerBackgroundOpacity": 0,
 "shadowHorizontalLength": 3,
 "shadow": true,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "minWidth": 20,
 "bodyBackgroundColorDirection": "vertical",
 "headerVerticalAlign": "middle",
 "shadowBlurRadius": 6,
 "veilOpacity": 0.4,
 "closeButtonIconColor": "#B2B2B2",
 "shadowOpacity": 0.5,
 "headerPaddingLeft": 10,
 "bodyPaddingRight": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerPaddingRight": 0,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Window5631"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "horizontalAlign": "center",
 "bodyPaddingLeft": 0,
 "titleFontColor": "#000000",
 "bodyPaddingTop": 0
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_B88477D3_B6B4_A526_41E5_9946CA92A091, [this.htmltext_B88277D3_B6B4_A526_41DE_502DE2356EED,this.component_B883A7D4_B6B4_A522_416E_1C7E28ADC579,this.component_B883B7D4_B6B4_A522_41E0_5D350EAA3202], 2000)",
 "items": [
  "this.albumitem_B88447D3_B6B4_A526_41DA_5F4B60ED32A7"
 ],
 "id": "playList_BB64251E_B674_655F_41D7_4357999FDFBC",
 "class": "PlayList"
},
{
 "id": "MainViewerVideoPlayer",
 "viewerArea": "this.MainViewer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "duration": 5000,
 "label": "AF_27 - Photo",
 "thumbnailUrl": "media/album_A7CA7377_B0BD_877B_41CF_2B8FC2CD590F_0_t.jpg",
 "id": "album_A7CA7377_B0BD_877B_41CF_2B8FC2CD590F_0",
 "width": 2160,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_A7CA7377_B0BD_877B_41CF_2B8FC2CD590F_0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 3840,
 "class": "Photo"
},
{
 "playList": "this.album_BF7F74F6_B114_9F70_41D3_74F0C36038A0_AlbumPlayList",
 "label": "Photo Album Capture d'\u00e9cran 2024-12-10 155914",
 "thumbnailUrl": "media/album_BF7F74F6_B114_9F70_41D3_74F0C36038A0_t.png",
 "id": "album_BF7F74F6_B114_9F70_41D3_74F0C36038A0",
 "class": "PhotoAlbum"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_camera"
},
{
 "autoplay": true,
 "audio": "this.audioresource_BF9C43DA_B0CF_87B5_41E5_3D62A23020CA",
 "id": "audio_BF1DE7BE_B0CD_8FEA_41E0_A4EDD65CDA59",
 "data": {
  "label": "Mugler Spring Summer 2024 Show"
 },
 "class": "PanoramaAudio"
},
{
 "playList": "this.album_A7CA7377_B0BD_877B_41CF_2B8FC2CD590F_AlbumPlayList",
 "label": "Exterior",
 "thumbnailUrl": "media/album_A7CA7377_B0BD_877B_41CF_2B8FC2CD590F_t.png",
 "id": "album_A7CA7377_B0BD_877B_41CF_2B8FC2CD590F",
 "class": "PhotoAlbum"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_BA8A797C_B0CD_836D_41B6_DB09A73E53BB_camera"
},
{
 "items": [
  {
   "media": "this.panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_BA8A797C_B0CD_836D_41B6_DB09A73E53BB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BA8A797C_B0CD_836D_41B6_DB09A73E53BB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.album_A7CA7377_B0BD_877B_41CF_2B8FC2CD590F",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 3)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.album_BF7F74F6_B114_9F70_41D3_74F0C36038A0",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.album_A3933CCF_B12D_AF90_41C2_252EADA907FC",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.album_A57B581F_B135_96B1_41CF_0E8AFD27F1BD",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "media": "this.video_A3D82495_B12D_9FB1_41DF_A04375D10182",
   "end": "this.trigger('tourEnded')",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 7, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 7)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 0)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "hfov": 122,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "id": "panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_camera"
},
{
 "id": "MainViewerPhotoAlbumPlayer",
 "viewerArea": "this.MainViewer",
 "class": "PhotoAlbumPlayer"
},
{
 "label": "Second Floor",
 "id": "panorama_BA8A797C_B0CD_836D_41B6_DB09A73E53BB",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E"
  }
 ],
 "overlays": [
  "this.overlay_BF174A23_B0C4_809B_41E3_9F2E79EB5469",
  "this.overlay_A3086725_B114_9A91_41E3_874C21B47E1D"
 ],
 "partial": false,
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA8A797C_B0CD_836D_41B6_DB09A73E53BB_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BA8A797C_B0CD_836D_41B6_DB09A73E53BB_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA8A797C_B0CD_836D_41B6_DB09A73E53BB_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BA8A797C_B0CD_836D_41B6_DB09A73E53BB_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA8A797C_B0CD_836D_41B6_DB09A73E53BB_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BA8A797C_B0CD_836D_41B6_DB09A73E53BB_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA8A797C_B0CD_836D_41B6_DB09A73E53BB_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BA8A797C_B0CD_836D_41B6_DB09A73E53BB_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA8A797C_B0CD_836D_41B6_DB09A73E53BB_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BA8A797C_B0CD_836D_41B6_DB09A73E53BB_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BA8A797C_B0CD_836D_41B6_DB09A73E53BB_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA8A797C_B0CD_836D_41B6_DB09A73E53BB_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BA8A797C_B0CD_836D_41B6_DB09A73E53BB_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "audios": [
  "this.audio_BF1DE7BE_B0CD_8FEA_41E0_A4EDD65CDA59"
 ],
 "thumbnailUrl": "media/panorama_BA8A797C_B0CD_836D_41B6_DB09A73E53BB_t.jpg",
 "hfovMax": 130,
 "hfov": 360,
 "hfovMin": "150%",
 "class": "Panorama"
},
{
 "duration": 5000,
 "label": "Capture d'\u00e9cran 2024-12-10 155914",
 "thumbnailUrl": "media/album_BF7F74F6_B114_9F70_41D3_74F0C36038A0_0_t.png",
 "id": "album_BF7F74F6_B114_9F70_41D3_74F0C36038A0_0",
 "width": 1434,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_BF7F74F6_B114_9F70_41D3_74F0C36038A0_0.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 807,
 "class": "Photo"
},
{
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "label": "Third Floor",
 "thumbnailUrl": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_t.jpg",
 "id": "panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E",
 "hfovMax": 130,
 "hfovMin": "120%",
 "overlays": [
  "this.overlay_A3A83A3C_B133_AAF0_41C4_88C5A30B20D2"
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0
},
{
 "label": "Ground Floor",
 "id": "panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BA8A797C_B0CD_836D_41B6_DB09A73E53BB"
  }
 ],
 "overlays": [
  "this.overlay_BC0ECEB4_B0DC_81FD_41DC_89AA6E299174",
  "this.overlay_A5507B42_B0CC_8095_41BE_02F585B6E62A",
  "this.overlay_BFC5E7B2_B11D_79F3_41CE_58B09D1327B2",
  "this.overlay_A3F0A624_B13D_7A90_41E0_1C8416A71ECA"
 ],
 "partial": false,
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_t.jpg",
 "hfovMax": 130,
 "hfov": 360,
 "hfovMin": "120%",
 "class": "Panorama"
},
{
 "duration": 5000,
 "label": "Capture d'\u00e9cran 2024-12-10 161809",
 "thumbnailUrl": "media/album_A57B581F_B135_96B1_41CF_0E8AFD27F1BD_0_t.png",
 "id": "album_A57B581F_B135_96B1_41CF_0E8AFD27F1BD_0",
 "width": 1440,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_A57B581F_B135_96B1_41CF_0E8AFD27F1BD_0.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 811,
 "class": "Photo"
},
{
 "duration": 5000,
 "label": "Capture d'\u00e9cran 2024-12-10 155939",
 "thumbnailUrl": "media/album_A3933CCF_B12D_AF90_41C2_252EADA907FC_0_t.png",
 "id": "album_A3933CCF_B12D_AF90_41C2_252EADA907FC_0",
 "width": 1437,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_A3933CCF_B12D_AF90_41C2_252EADA907FC_0.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 802,
 "class": "Photo"
},
{
 "playList": "this.album_A57B581F_B135_96B1_41CF_0E8AFD27F1BD_AlbumPlayList",
 "label": "Photo Album Capture d'\u00e9cran 2024-12-10 161809",
 "thumbnailUrl": "media/album_A57B581F_B135_96B1_41CF_0E8AFD27F1BD_t.png",
 "id": "album_A57B581F_B135_96B1_41CF_0E8AFD27F1BD",
 "class": "PhotoAlbum"
},
{
 "progressBorderRadius": 0,
 "toolTipTextShadowVerticalLength": 0,
 "propagateClick": false,
 "paddingBottom": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "width": "100%",
 "playbackBarRight": 0,
 "id": "MainViewer",
 "progressBarBorderSize": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipShadowSpread": 0,
 "progressBarBorderColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "playbackBarBorderSize": 0,
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "transitionDuration": 500,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadOpacity": 1,
 "toolTipFontWeight": "normal",
 "toolTipShadowVerticalLength": 0,
 "playbackBarProgressBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingLeft": 6,
 "toolTipTextShadowOpacity": 0.08,
 "progressBarBorderRadius": 0,
 "height": "100%",
 "class": "ViewerArea",
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipOpacity": 0.84,
 "toolTipFontSize": "1.11vmin",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "progressRight": 0,
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingBottom": 4,
 "toolTipShadowOpacity": 0.24,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingRight": 0,
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorDirection": "vertical",
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#000000",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "firstTransitionDuration": 0,
 "progressBottom": 0,
 "vrPointerSelectionTime": 2000,
 "progressBackgroundColorDirection": "vertical",
 "toolTipTextShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "toolTipTextShadowColor": "#000000",
 "progressHeight": 10,
 "playbackBarBottom": 5,
 "toolTipShadowHorizontalLength": 0,
 "progressBorderColor": "#000000",
 "minHeight": 50,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "shadow": false,
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "minWidth": 100,
 "progressBarOpacity": 1,
 "paddingTop": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressLeft": 0,
 "toolTipBorderRadius": 3,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressOpacity": 1,
 "displayTooltipInTouchScreens": true
},
{
 "propagateClick": false,
 "paddingBottom": 10,
 "left": "0.04%",
 "verticalAlign": "top",
 "id": "ThumbnailList_BE0B1540_B0FC_8095_41D0_57B6D371FC88",
 "gap": 13,
 "backgroundOpacity": 0,
 "itemHorizontalAlign": "center",
 "scrollBarColor": "#FFFFFF",
 "itemThumbnailShadowColor": "#000000",
 "itemBackgroundOpacity": 0,
 "width": "34.97%",
 "borderRadius": 5,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailWidth": 75,
 "paddingLeft": 20,
 "itemLabelFontWeight": "normal",
 "itemThumbnailShadowBlurRadius": 8,
 "itemPaddingBottom": 3,
 "class": "ThumbnailList",
 "itemMode": "normal",
 "itemVerticalAlign": "middle",
 "rollOverItemBackgroundOpacity": 0,
 "itemLabelFontSize": 14,
 "scrollBarWidth": 10,
 "selectedItemLabelFontWeight": "bold",
 "scrollBarOpacity": 0.5,
 "itemLabelFontFamily": "Arial",
 "borderSize": 0,
 "paddingRight": 20,
 "itemBorderRadius": 0,
 "itemThumbnailBorderRadius": 5,
 "scrollBarVisible": "rollOver",
 "itemLabelGap": 8,
 "itemThumbnailOpacity": 1,
 "itemLabelHorizontalAlign": "center",
 "selectedItemLabelFontColor": "#FFCC00",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemLabelFontStyle": "normal",
 "itemPaddingRight": 3,
 "itemLabelTextDecoration": "none",
 "playList": "this.ThumbnailList_BE0B1540_B0FC_8095_41D0_57B6D371FC88_playlist",
 "layout": "horizontal",
 "itemThumbnailShadow": true,
 "itemPaddingTop": 3,
 "itemThumbnailShadowVerticalLength": 3,
 "itemBackgroundColor": [],
 "minHeight": 20,
 "itemThumbnailScaleMode": "fit_outside",
 "bottom": "0%",
 "itemPaddingLeft": 3,
 "itemThumbnailShadowOpacity": 0.54,
 "itemBackgroundColorRatios": [],
 "shadow": false,
 "minWidth": 20,
 "itemLabelPosition": "bottom",
 "paddingTop": 10,
 "itemOpacity": 1,
 "scrollBarMargin": 2,
 "itemThumbnailHeight": 75,
 "data": {
  "name": "ThumbnailList35762"
 },
 "itemLabelFontColor": "#FFFFFF",
 "rollOverItemLabelFontWeight": "bold",
 "horizontalAlign": "left",
 "itemThumbnailShadowSpread": 1
},
{
 "propagateClick": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "maxHeight": 23,
 "maxWidth": 35,
 "id": "IconButton_BA66234C_B6B5_9D23_41C4_F2D4591A4CA3",
 "right": "6.51%",
 "width": 35,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "iconURL": "skin/IconButton_BA66234C_B6B5_9D23_41C4_F2D4591A4CA3.png",
 "transparencyActive": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "bottom": "47.48%",
 "height": 23,
 "mode": "push",
 "shadow": false,
 "class": "IconButton",
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "data": {
  "name": "IconButton7201"
 },
 "paddingRight": 0,
 "cursor": "hand"
},
{
 "items": [
  {
   "media": "this.album_A3933CCF_B12D_AF90_41C2_252EADA907FC_0",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_A3933CCF_B12D_AF90_41C2_252EADA907FC_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.viewer_uidB884A7D3_B6B4_A526_41D9_35AC5C67394F",
  {
   "scrollBarOpacity": 0.5,
   "scrollBarVisible": "rollOver",
   "children": [
    "this.htmltext_B88277D3_B6B4_A526_41DE_502DE2356EED"
   ],
   "propagateClick": false,
   "paddingBottom": 0,
   "left": 0,
   "layout": "vertical",
   "scrollBarMargin": 2,
   "scrollBarColor": "#FFFFFF",
   "gap": 10,
   "right": 0,
   "verticalAlign": "bottom",
   "backgroundOpacity": 0.3,
   "contentOpaque": true,
   "borderRadius": 0,
   "overflow": "scroll",
   "minHeight": 20,
   "paddingLeft": 0,
   "backgroundColorRatios": [],
   "bottom": 0,
   "backgroundColor": [],
   "shadow": false,
   "height": "30%",
   "class": "Container",
   "minWidth": 20,
   "paddingTop": 0,
   "scrollBarWidth": 7,
   "backgroundColorDirection": "vertical",
   "borderSize": 0,
   "data": {
    "name": "Container3806"
   },
   "horizontalAlign": "left",
   "paddingRight": 0
  },
  "this.component_B883A7D4_B6B4_A522_416E_1C7E28ADC579",
  "this.component_B883B7D4_B6B4_A522_41E0_5D350EAA3202"
 ],
 "propagateClick": false,
 "paddingBottom": 0,
 "gap": 10,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "id": "container_B88477D3_B6B4_A526_41E5_9946CA92A091",
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "width": "100%",
 "contentOpaque": false,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "minHeight": 20,
 "paddingLeft": 0,
 "backgroundColorRatios": [],
 "backgroundColor": [],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "minWidth": 20,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "data": {
  "name": "Container3805"
 },
 "horizontalAlign": "left",
 "paddingRight": 0
},
{
 "media": "this.album_BF7F74F6_B114_9F70_41D3_74F0C36038A0",
 "begin": "this.updateMediaLabelFromPlayList(this.album_BF7F74F6_B114_9F70_41D3_74F0C36038A0_AlbumPlayList, this.htmltext_B88277D3_B6B4_A526_41DE_502DE2356EED, this.albumitem_B88447D3_B6B4_A526_41DA_5F4B60ED32A7); this.loopAlbum(this.playList_BB64251E_B674_655F_41D7_4357999FDFBC, 0)",
 "player": "this.viewer_uidB884A7D3_B6B4_A526_41D9_35AC5C67394FPhotoAlbumPlayer",
 "id": "albumitem_B88447D3_B6B4_A526_41DA_5F4B60ED32A7",
 "class": "PhotoAlbumPlayListItem"
},
{
 "items": [
  {
   "media": "this.album_BF7F74F6_B114_9F70_41D3_74F0C36038A0_0",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_BF7F74F6_B114_9F70_41D3_74F0C36038A0_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "mp3Url": "media/audio_BF1DE7BE_B0CD_8FEA_41E0_A4EDD65CDA59.mp3",
 "id": "audioresource_BF9C43DA_B0CF_87B5_41E5_3D62A23020CA",
 "oggUrl": "media/audio_BF1DE7BE_B0CD_8FEA_41E0_A4EDD65CDA59.ogg",
 "class": "AudioResource"
},
{
 "items": [
  {
   "media": "this.album_A7CA7377_B0BD_877B_41CF_2B8FC2CD590F_0",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_A7CA7377_B0BD_877B_41CF_2B8FC2CD590F_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "maps": [
  {
   "hfov": 18.39,
   "yaw": 7.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA8A797C_B0CD_836D_41B6_DB09A73E53BB_0_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -17.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 01b"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18.39,
   "image": "this.AnimatedImageResource_A3B70F30_B0C7_80F6_415E_7CC7881C2AE8",
   "pitch": -17.96,
   "yaw": 7.1,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BF174A23_B0C4_809B_41E3_9F2E79EB5469",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay"
},
{
 "maps": [
  {
   "hfov": 23.4,
   "yaw": 5.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA8A797C_B0CD_836D_41B6_DB09A73E53BB_0_HS_1_1_0_map.gif",
      "width": 67,
      "height": 109,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 3.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "items": [
  {
   "pitch": 3.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA8A797C_B0CD_836D_41B6_DB09A73E53BB_0_HS_1_0.png",
      "width": 134,
      "height": 218,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "roll": 0,
   "yaw": 5.8,
   "hfov": 23.4
  }
 ],
 "id": "overlay_A3086725_B114_9A91_41E3_874C21B47E1D",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay"
},
{
 "maps": [
  {
   "hfov": 53.78,
   "yaw": 0.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 155,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 7.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "items": [
  {
   "pitch": 7.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB228DE5_B0CD_839F_41D4_780C0D00772E_0_HS_0_0.png",
      "width": 1322,
      "height": 1028,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "roll": 0,
   "yaw": 0.32,
   "hfov": 53.78
  }
 ],
 "id": "overlay_A3A83A3C_B133_AAF0_41C4_88C5A30B20D2",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay"
},
{
 "maps": [
  {
   "hfov": 8.07,
   "yaw": -37.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -24.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.07,
   "image": "this.AnimatedImageResource_BE035610_B0DD_80B5_41AF_CFB5ADA34EBE",
   "pitch": -24.26,
   "yaw": -37.91,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_BC0ECEB4_B0DC_81FD_41DC_89AA6E299174",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay"
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0_HS_3_1_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0_HS_3_2_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0_HS_3_3_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "items": [
  {
   "pitch": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0_HS_3_00002.png",
      "width": 1300,
      "height": 1300,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "roll": 0,
   "yaw": -180,
   "hfov": 90
  },
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0_HS_3_00004.png",
      "width": 1300,
      "height": 1300,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 90,
   "yaw": 0,
   "pitch": 90,
   "class": "HotspotPanoramaOverlayImage"
  },
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0_HS_3_00005.png",
      "width": 1300,
      "height": 1300,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 90,
   "yaw": 0,
   "pitch": -90,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A5507B42_B0CC_8095_41BE_02F585B6E62A",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay"
},
{
 "maps": [
  {
   "hfov": 62.87,
   "yaw": 0.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0_HS_4_1_0_map.gif",
      "width": 176,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 4.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "items": [
  {
   "pitch": 4.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0_HS_4_0.png",
      "width": 1593,
      "height": 1801,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "roll": 0,
   "yaw": 0.17,
   "hfov": 62.87
  }
 ],
 "id": "overlay_BFC5E7B2_B11D_79F3_41CE_58B09D1327B2",
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_BF945399_B113_79B1_41E1_25683F67398F, this.album_BF7F74F6_B114_9F70_41D3_74F0C36038A0, this.playList_BB64251E_B674_655F_41D7_4357999FDFBC, '90%', '90%', false, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay"
},
{
 "maps": [
  {
   "hfov": 4.62,
   "yaw": -157.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -72.47,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 02 Right"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.62,
   "image": "this.AnimatedImageResource_A3A96DC1_B12C_A991_41DD_C7B0D9F06ADF",
   "pitch": -72.47,
   "yaw": -157.22,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_A3F0A624_B13D_7A90_41E0_1C8416A71ECA",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7); this.MainViewerVideoPlayer.play()",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay"
},
{
 "items": [
  {
   "media": "this.album_A57B581F_B135_96B1_41CF_0E8AFD27F1BD_0",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_A57B581F_B135_96B1_41CF_0E8AFD27F1BD_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "progressBorderRadius": 0,
 "data": {
  "name": "ViewerArea3804"
 },
 "propagateClick": false,
 "paddingBottom": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "width": "100%",
 "playbackBarRight": 0,
 "id": "viewer_uidB884A7D3_B6B4_A526_41D9_35AC5C67394F",
 "progressBarBorderSize": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipShadowSpread": 0,
 "progressBarBorderColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "playbackBarBorderSize": 0,
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "transitionDuration": 500,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "toolTipFontWeight": "normal",
 "toolTipShadowVerticalLength": 0,
 "playbackBarProgressBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingLeft": 6,
 "toolTipTextShadowOpacity": 0,
 "progressBarBorderRadius": 0,
 "height": "100%",
 "class": "ViewerArea",
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "progressRight": 0,
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingBottom": 4,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingRight": 0,
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorDirection": "vertical",
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "vrPointerSelectionTime": 2000,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "toolTipTextShadowColor": "#000000",
 "progressHeight": 10,
 "playbackBarBottom": 0,
 "toolTipShadowHorizontalLength": 0,
 "progressBorderColor": "#000000",
 "minHeight": 50,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "shadow": false,
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "minWidth": 100,
 "progressBarOpacity": 1,
 "paddingTop": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressLeft": 0,
 "toolTipBorderRadius": 3,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressOpacity": 1,
 "displayTooltipInTouchScreens": true
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "paddingBottom": 5,
 "scrollBarMargin": 2,
 "id": "htmltext_B88277D3_B6B4_A526_41DE_502DE2356EED",
 "backgroundOpacity": 0.7,
 "width": "100%",
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minHeight": 0,
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "class": "HTMLText",
 "minWidth": 0,
 "paddingTop": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "html": "",
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "data": {
  "name": "HTMLText3807"
 },
 "visible": false,
 "paddingRight": 10
},
{
 "propagateClick": false,
 "paddingBottom": 0,
 "left": 10,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "id": "component_B883A7D4_B6B4_A522_416E_1C7E28ADC579",
 "backgroundOpacity": 0,
 "transparencyActive": false,
 "iconURL": "skin/album_left.png",
 "borderRadius": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minHeight": 0,
 "paddingLeft": 0,
 "top": "45%",
 "mode": "push",
 "shadow": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "click": "this.loadFromCurrentMediaPlayList(this.album_BF7F74F6_B114_9F70_41D3_74F0C36038A0_AlbumPlayList, -1)",
 "minWidth": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "borderSize": 0,
 "data": {
  "name": "IconButton3808"
 },
 "visible": false,
 "paddingRight": 0,
 "cursor": "hand"
},
{
 "propagateClick": false,
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "id": "component_B883B7D4_B6B4_A522_41E0_5D350EAA3202",
 "right": 10,
 "transparencyActive": false,
 "backgroundOpacity": 0,
 "iconURL": "skin/album_right.png",
 "borderRadius": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeOutEffect"
 },
 "minHeight": 0,
 "paddingLeft": 0,
 "top": "45%",
 "mode": "push",
 "shadow": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "duration": 250,
  "class": "FadeInEffect"
 },
 "click": "this.loadFromCurrentMediaPlayList(this.album_BF7F74F6_B114_9F70_41D3_74F0C36038A0_AlbumPlayList, 1)",
 "minWidth": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "borderSize": 0,
 "data": {
  "name": "IconButton3809"
 },
 "visible": false,
 "paddingRight": 0,
 "cursor": "hand"
},
{
 "id": "viewer_uidB884A7D3_B6B4_A526_41D9_35AC5C67394FPhotoAlbumPlayer",
 "viewerArea": "this.viewer_uidB884A7D3_B6B4_A526_41D9_35AC5C67394F",
 "class": "PhotoAlbumPlayer"
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "frameDuration": 62,
 "id": "AnimatedImageResource_A3B70F30_B0C7_80F6_415E_7CC7881C2AE8",
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_BA8A797C_B0CD_836D_41B6_DB09A73E53BB_0_HS_0_0.png",
   "width": 330,
   "height": 180,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "frameDuration": 62,
 "id": "AnimatedImageResource_BE035610_B0DD_80B5_41AF_CFB5ADA34EBE",
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_1_HS_0_0.png",
   "width": 300,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ]
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_A3A96DC1_B12C_A991_41DD_C7B0D9F06ADF",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_BA88AC83_B0CD_819A_41DB_F9D149C0C125_0_HS_5_0.png",
   "width": 380,
   "height": 570,
   "class": "ImageResourceLevel"
  }
 ]
}],
 "minHeight": 20,
 "paddingLeft": 0,
 "shadow": false,
 "height": "100%",
 "class": "Player",
 "minWidth": 20,
 "vrPolyfillScale": 0.5,
 "mobileMipmappingEnabled": false,
 "paddingTop": 0,
 "defaultVRPointer": "laser",
 "scrollBarWidth": 10,
 "mouseWheelEnabled": true,
 "borderSize": 0,
 "data": {
  "name": "Player445"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scripts": {
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "unregisterKey": function(key){  delete window[key]; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getKey": function(key){  return window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
