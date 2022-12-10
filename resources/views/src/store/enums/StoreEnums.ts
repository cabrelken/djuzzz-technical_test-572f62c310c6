enum Actions {
  // action types
  ADD_BODY_CLASSNAME = "addBodyClassName",
  REMOVE_BODY_CLASSNAME = "removeBodyClassName",
  ADD_BODY_ATTRIBUTE = "addBodyAttribute",
  REMOVE_BODY_ATTRIBUTE = "removeBodyAttribute",
  ADD_CLASSNAME = "addClassName",
  VERIFY_AUTH = "verifyAuth",
  LOGIN = "login",
  LOGOUT = "logout",
  LOCKEDSCREEN = "lockedScreen",
  REGISTER = "register",
  UPDATE_USER = "updateUser",
  FORGOT_PASSWORD = "forgotPassword",
  RESET_PASSWORD = "resetPassword",
  FORCE_CHANGE_PASSWORD = "forceResetPassword",
  SET_BREADCRUMB_ACTION = "setBreadcrumbAction",
  SET_THEME_MODE_ACTION = "setThemeModeAction",
  SET_ASIDE_MODE_ACTION = "setAsideModeAction",
  SET_HEADER_MODE_ACTION = "setHeaderModeAction",
  RESEND_EMAIL_VERIFICATION_LINK = "resendEmailVerificationLink",
}

enum Mutations {
  // mutation types
  SET_CLASSNAME_BY_POSITION = "appendBreadcrumb",
  PURGE_AUTH = "logOut",
  SET_AUTH = "setAuth",
  SET_USER = "setUser",
  SET_PASSWORD = "setPassword",
  SET_ERROR = "setError",
  SET_BREADCRUMB_MUTATION = "setBreadcrumbMutation",
  SET_LAYOUT_CONFIG_PROPERTY = "setLayoutConfigProperty",
  RESET_LAYOUT_CONFIG = "resetLayoutConfig",
  OVERRIDE_LAYOUT_CONFIG = "overrideLayoutConfig",
  OVERRIDE_PAGE_LAYOUT_CONFIG = "overridePageLayoutConfig",
  SET_THEME_MODE_MUTATION = "setThemeModeMutation",
  SET_ASIDE_MODE_MUTATION = "setAsideModeMutation",
  SET_HEADER_MODE_MUTATION = "setHeaderModeMutation",
  SET_LOCKED = "setLocked",
  SET_UNLOCKED = "setUnlocked",
  SET_API_TOKEN = "setApiToken",
  DELETE_API_TOKEN = "deleteApiToken",
  CHANGE_IS_IDLE = "changeIsIdle",
  CHANGE_LAST_ACTIVE_AT = "changeLastActiveAt",
  PURGE_IS_IDLE = "purgeIsIdleStates",
  SET_AVATAR = "setAvatar",
  SET_LOGO = "setLogo",
  SET_SIGNATURE = "setSignature",
}

export { Actions, Mutations };