abstract class Routes {
  static HOME = "/";
  static ABOUT_US = "/about-us";
  static CAMPAIGNS = "/campaigns";
  static DONATE = "/donate";
  static GALLERY = "/gallery";
  static LOGIN = "/auth/login";
  static REGISTER = "/auth/register";
  static SHOP = "/shop";

  static CAMPAIGN_DETAILS = (id: number) => `/campaigns/${id}`;
}

export default Routes;
