const THEMES = {
  cold: {
    colors: {
      bookmark_text: "hsl(213, 39%, 11%)",
      button_background_active: "hsla(213, 36%, 96%, 0.729)",
      button_background_hover: "hsla(213, 36%, 96%, 0.541)",
      icons: "hsl(213, 34%, 20%)",
      icons_attention: "hsl(202, 100%, 28%)",
      frame: "hsl(213, 37%, 92%)",
      frame_inactive: "hsl(213, 24%, 64%)",
      ntp_background: "hsl(213, 37%, 92%)",
      ntp_text: "hsl(213, 34%, 20%)",
      popup: "hsl(213, 36%, 96%)",
      popup_border: "hsl(213, 24%, 64%)",
      popup_highlight: "hsla(213, 24%, 64%, 0.353)",
      popup_highlight_text: "hsl(213, 34%, 20%)",
      popup_text: "hsl(213, 34%, 20%)",
      sidebar: "hsl(213, 32%, 86%)",
      sidebar_border: "hsl(213, 24%, 64%)",
      sidebar_highlight: "hsla(213, 24%, 64%, 0.353)",
      sidebar_highlight_text: "hsl(213, 34%, 20%)",
      sidebar_text: "hsl(213, 34%, 20%)",
      tab_background_separator: "hsl(213, 24%, 64%)",
      tab_background_text: "hsl(213, 34%, 20%)",
      tab_line: " hsl(202, 100%, 28%)",
      tab_loading: "hsl(202, 100%, 28%)",
      tab_selected: "hsl(213, 32%, 86%)",
      tab_text: "hsl(213, 39%, 11%)",
      toolbar: "hsl(213, 32%, 86%)",
      toolbar_bottom_separator: "hsl(213, 24%, 64%)",
      toolbar_field: "hsl(213, 37%, 92%)",
      toolbar_field_border: "hsl(213, 24%, 64%)",
      toolbar_field_border_focus: "hsl(202, 100%, 28%)",
      toolbar_field_focus: "hsl(213, 36%, 96%)",
      toolbar_field_highlight: " hsla(202, 100%, 28%, 0.353)",
      toolbar_field_highlight_text: "hsl(213, 34%, 20%)",
      toolbar_field_separator: "hsl(213, 24%, 64%)",
      toolbar_field_text: "hsl(213, 34%, 20%)",
      toolbar_field_text_focus: "hsl(213, 34%, 20%)",
      toolbar_text: "hsl(213, 39%, 11%)",
      toolbar_top_separator: "hsl(213, 24%, 64%)",
      toolbar_vertical_separator: "hsl(213, 24%, 64%)",
    },
  },
  dark: {
    colors: {
      bookmark_text: "hsl(213, 37%, 92%)",
      button_background_active: "hsla(213, 29%, 33%, 0.729)",
      button_background_hover: "hsla(213, 29%, 33%, 0.541)",
      icons: "hsl(213, 32%, 86%)",
      icons_attention: "hsl(203, 71%, 66%)",
      frame: "hsl(213, 39%, 11%)",
      frame_inactive: "hsl(213, 42%, 7%)",
      ntp_background: "hsl(213, 39%, 11%)",
      ntp_text: "hsl(213, 32%, 86%)",
      popup: "hsl(213, 29%, 33%)",
      popup_border: "hsl(213, 42%, 7%)",
      popup_highlight: "hsla(213, 42%, 7%, 0.541)",
      popup_highlight_text: "hsl(213, 32%, 86%)",
      popup_text: "hsl(213, 32%, 86%)",
      sidebar: "hsl(213, 34%, 20%)",
      sidebar_border: "hsl(213, 42%, 7%)",
      sidebar_highlight: "hsla(213, 42%, 7%, 0.541)",
      sidebar_highlight_text: "hsl(213, 32%, 86%)",
      sidebar_text: "hsl(213, 32%, 86%)",
      tab_background_separator: "hsl(213, 42%, 7%)",
      tab_background_text: "hsl(213, 32%, 86%)",
      tab_line: "hsl(203, 71%, 66%)",
      tab_loading: "hsl(203, 71%, 66%)",
      tab_selected: "hsl(213, 34%, 20%)",
      tab_text: "hsl(213, 37%, 92%)",
      toolbar: "hsl(213, 34%, 20%)",
      toolbar_bottom_separator: "hsl(213, 42%, 7%)",
      toolbar_field: "hsl(213, 39%, 11%)",
      toolbar_field_border: "hsl(213, 42%, 7%)",
      toolbar_field_border_focus: "hsl(203, 71%, 66%)",
      toolbar_field_focus: "hsl(213, 29%, 33%)",
      toolbar_field_highlight: "hsla(203, 71%, 66%, 0.353)",
      toolbar_field_highlight_text: "hsl(213, 32%, 86%)",
      toolbar_field_separator: "hsl(213, 42%, 7%)",
      toolbar_field_text: "hsl(213, 32%, 86%)",
      toolbar_field_text_focus: "hsl(213, 37%, 92%)",
      toolbar_text: "hsl(213, 37%, 92%)",
      toolbar_top_separator: "hsl(213, 42%, 7%)",
      toolbar_vertical_separator: "hsl(213, 42%, 7%)",
    },
  },
};

class ColdarkThemes {
  constructor() {
    this.currentTheme = "";
  }

  setCurrentTheme(theme) {
    this.currentTheme = theme;
  }

  getUserPreferences() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    } else {
      return "cold";
    }
  }

  updateBrowserTheme(theme) {
    browser.theme.update(THEMES[theme]);
  }

  enableDefaultTheme() {
    if (this.currentTheme === "") {
      let preferences = this.getUserPreferences();
      this.setCurrentTheme(preferences);
      this.updateBrowserTheme(preferences);
    }
  }

  switchTheme() {
    let wantedTheme = "";
    if (this.currentTheme === "cold") {
      wantedTheme = "dark";
    } else {
      wantedTheme = "cold";
    }
    this.setCurrentTheme(wantedTheme);
    this.updateBrowserTheme(wantedTheme);
  }
}

myTheme = new ColdarkThemes();

myTheme.enableDefaultTheme();

browser.browserAction.onClicked.addListener(() => myTheme.switchTheme());
browser.commands.onCommand.addListener((command) => {
  if (command === "switch-theme") {
    myTheme.switchTheme();
  }
});
