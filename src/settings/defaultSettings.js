import browser from "webextension-polyfill";
import browserInfo from "browser-info";
import SignInButton from "../options/components/SignInButton";

const handleApplyDeviceNameButtonClick = () => {
  const res = confirm(browser.i18n.getMessage("applyDeviceNameConfirmLabel"));
  if (res) browser.runtime.sendMessage({ message: "applyDeviceName" });
};

export default [
  {
    category: "generalLabel",
    elements: [
      {
        id: "ifLazyLoading",
        title: "ifLazyLoadingLabel",
        captions: ["ifLazyLoadingCaptionLabel"],
        type: "checkbox",
        default: true,
        childElements: [
          {
            id: "isUseDiscarded",
            title: "isUseDiscardedLabel",
            captions: ["isUseDiscardedCaptionLabel", "isUseDiscardedCaption2Label"],
            type: "checkbox",
            default: true,
            shouldShow: browserInfo().name == "Firefox" && browserInfo().version >= 63
          }
        ]
      },
      {
        id: "isRestoreWindowPosition",
        title: "isRestoreWindowPositionLabel",
        captions: ["isRestoreWindowPositionCaptionLabel"],
        type: "checkbox",
        default: true
      },
      {
        id: "ifSupportTst",
        title: "ifSupportTstLabel",
        captions: ["ifSupportTstCaptionLabel"],
        type: "checkbox",
        default: false,
        childElements: [
          {
            id: "tstDelay",
            title: "tstDelayLabel",
            captions: ["tstDelayCaptionLabel"],
            type: "number",
            min: 0,
            placeholder: 150,
            default: 150
          }
        ]
      },
      {
        id: "ifSavePrivateWindow",
        title: "ifSavePrivateWindowLabel",
        captions: ["ifSavePrivateWindowCaptionLabel"],
        type: "checkbox",
        default: false
      },
      {
        id: "ignoreUrlList",
        title: "ignoreUrlListLabel",
        captions: ["ignoreUrlListCaptionLabel"],
        type: "textarea",
        default: "",
        placeholder: "https://example.com/*\nhttps://example.net/*"
      },
      {
        id: "shouldSaveDeviceName",
        title: "shouldSaveDeviceNameLabel",
        captions: ["shouldSaveDeviceNameCaptionLabel"],
        type: "checkbox",
        default: false,
        childElements: [
          {
            id: "deviceName",
            title: "deviceNameLabel",
            captions: ["deviceNameCaptionLabel"],
            type: "text",
            placeholder: "My laptop",
            default: ""
          },
          {
            title: "applyDeviceNameLabel",
            captions: ["applyDeviceNameCaptionLabel"],
            type: "button",
            value: "applyDeviceNameButtonLabel",
            onClick: handleApplyDeviceNameButtonClick
          }
        ]
      },
      {
        id: "dateFormat",
        title: "dateFormatLabel",
        captions: ["dateFormatCaptionLabel"],
        type: "text",
        placeholder: "YYYY.MM.DD HH:mm:ss",
        default: "YYYY.MM.DD HH:mm:ss"
      }
    ]
  },
  {
    category: "autoSaveLabel",
    elements: [
      {
        id: "ifAutoSave",
        title: "ifAutoSaveLabel",
        captions: ["ifAutoSaveCaptionLabel"],
        type: "checkbox",
        default: false,
        childElements: [
          {
            id: "autoSaveInterval",
            title: "autoSaveIntervalLabel",
            captions: ["autoSaveIntervalCaptionLabel"],
            type: "number",
            min: 0.1,
            step: 0.1,
            placeholder: 15,
            default: 15
          },
          {
            id: "autoSaveLimit",
            title: "autoSaveLimitLabel",
            captions: ["autoSaveLimitCaptionLabel"],
            type: "number",
            min: 1,
            placeholder: 10,
            default: 10
          }
        ]
      },
      {
        id: "ifAutoSaveWhenClose",
        title: "ifAutoSaveWhenCloseLabel",
        captions: ["ifAutoSaveWhenCloseCaptionLabel"],
        type: "checkbox",
        default: false,
        childElements: [
          {
            id: "autoSaveWhenCloseLimit",
            title: "autoSaveWhenCloseLimitLabel",
            captions: ["autoSaveWhenCloseCaptionLabel"],
            type: "number",
            min: 1,
            placeholder: 10,
            default: 10
          }
        ]
      },
      {
        id: "ifAutoSaveWhenExitBrowser",
        title: "ifAutoSaveWhenExitBrowserLabel",
        captions: ["ifAutoSaveWhenExitBrowserCaptionLabel"],
        type: "checkbox",
        default: false,
        childElements: [
          {
            id: "autoSaveWhenExitBrowserLimit",
            title: "autoSaveWhenExitBrowserLimitLabel",
            captions: ["autoSaveWhenExitBrowserCaptionLabel"],
            type: "number",
            min: 1,
            placeholder: 10,
            default: 10
          }
        ]
      },
      {
        id: "useTabTitleforAutoSave",
        title: "useTabTitleforAutoSaveLabel",
        captions: ["useTabTitleforAutoSaveCaptionLabel"],
        type: "checkbox",
        default: true
      }
    ]
  },
  {
    category: "startupLabel",
    elements: [
      {
        id: "startupBehavior",
        title: "startupBehaviorLabel",
        captions: [],
        type: "none",
        default: "none",
        childElements: [
          {
            id: "startupBehavior",
            title: "openPreviousSessionLabel",
            captions: ["openPreviousSessionCaptionLabel"],
            type: "radio",
            value: "previousSession"
          },
          {
            id: "startupBehavior",
            title: "openStartupSessionLabel",
            captions: ["openStartupSessionCaptionLabel"],
            type: "radio",
            value: "startupSession"
          },
          {
            id: "startupBehavior",
            title: "DoNothingLabel",
            captions: [""],
            type: "radio",
            value: "none"
          }
        ]
      }
    ]
  },
  {
    category: "backupLabel",
    elements: [
      {
        id: "ifBackup",
        title: "ifBackupLabel",
        captions: ["ifBackupCaptionLabel"],
        type: "checkbox",
        default: false,
        childElements: [
          {
            id: "backupFolder",
            title: "backupFolderLabel",
            captions: ["backupFolderCaptionLabel"],
            type: "text",
            placeholder: "TabSessionManager - Backup",
            default: "TabSessionManager - Backup"
          }
        ]
      }
    ]
  },
  {
    category: "cloudSyncLabel",
    elements: [
      {
        id: "enabledCloudSync",
        title: "enabledCloudSyncLabel",
        captions: ["enabledCloudSyncCaptionLabel"],
        type: "extra",
        extraForm: SignInButton,
        childElements: [
          {
            id: "includesAutoSaveToSync",
            title: "includesAutoSaveToSyncLabel",
            captions: ["includesAutoSaveToSyncCaptionLabel"],
            type: "checkbox",
            default: true,
            new: true
          }
        ]
      }
    ]
  },
  {
    category: "popupLabel",
    elements: [
      {
        id: "openButtonBehavior",
        title: "openButtonBehaviorLabel",
        captions: ["openButtonBehaviorCaptionLabel"],
        type: "none",
        default: "openInNewWindow",
        childElements: [
          {
            id: "openButtonBehavior",
            title: "openInNewWindowLabel",
            captions: ["openInNewWindowCaptionLabel"],
            type: "radio",
            value: "openInNewWindow"
          },
          {
            id: "openButtonBehavior",
            title: "openInCurrentWindowLabel",
            captions: ["openInCurrentWindowCaptionLabel"],
            type: "radio",
            value: "openInCurrentWindow"
          },
          {
            id: "openButtonBehavior",
            title: "addToCurrentWindowLabel",
            captions: ["addToCurrentWindowCaptionLabel"],
            type: "radio",
            value: "addToCurrentWindow"
          }
        ]
      },
      {
        id: "saveButtonBehavior",
        title: "saveButtonBehaviorLabel",
        captions: ["saveButtonBehaviorCaptionLabel"],
        type: "none",
        default: "saveAllWindows",
        childElements: [
          {
            id: "saveButtonBehavior",
            title: "saveAllWindowsLabel",
            captions: [""],
            type: "radio",
            value: "saveAllWindows"
          },
          {
            id: "saveButtonBehavior",
            title: "saveOnlyCurrentWindowLabel",
            captions: [""],
            type: "radio",
            value: "saveOnlyCurrentWindow"
          }
        ]
      },
      {
        id: "isShowSearchBar",
        title: "isShowSearchBarLabel",
        captions: ["isShowSearchBarCaptionLabel"],
        type: "checkbox",
        default: true
      },
      {
        id: "truncateTitle",
        title: "truncateTitleLabel",
        captions: ["truncateTitleCaptionLabel"],
        type: "checkbox",
        default: true
      },
      {
        id: "isShowOpenButtons",
        title: "isShowOpenButtonsLabel",
        captions: ["isShowOpenButtonsCaptionLabel"],
        type: "checkbox",
        default: true
      },
      {
        title: "sizeLabel",
        captions: ["popupSizeCaptionLabel"],
        type: "none",
        childElements: [
          {
            id: "popupWidthV2",
            title: "widthLabel",
            captions: [""],
            type: "number",
            min: 300,
            max: 800,
            placeholder: 700,
            default: 700
          },
          {
            id: "popupHeight",
            title: "heightLabel",
            captions: [""],
            type: "number",
            min: 200,
            max: 600,
            placeholder: 500,
            default: 500
          },
          {
            id: "sidebarWidth",
            title: "sidebarWidthLabel",
            captions: [""],
            type: "number",
            min: 100,
            max: 800,
            placeholder: 300,
            default: 300
          }
        ]
      },
      {
        id: "isSessionListOpenInTab",
        title: "isSessionListOpenInTabLabel",
        captions: ["isSessionListOpenInTabCaptionLabel"],
        type: "checkbox",
        default: false
      }
    ]
  },
  {
    category: "otherLabel",
    elements: [
      {
        id: "isShowOptionsPageWhenUpdated",
        title: "isShowOptionsPageWhenUpdatedLabel",
        captions: ["isShowOptionsPageWhenUpdatedCaptionLabel"],
        type: "checkbox",
        default: true
      },
      {
        id: "isDebugMode",
        title: "isDebugModeLabel",
        captions: ["isDebugModeCaptionLabel"],
        type: "checkbox",
        default: false
      }
    ]
  }
];
