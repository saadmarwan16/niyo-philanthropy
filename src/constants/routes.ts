abstract class Routes {
  static HOME = "/";
  static CAMPAIGNS = "/campaigns";
  static DONATE = "/donate";
  static GALLERY = "/gallery";
  static BLOG = "/blog";
  static LOGIN = "/auth/login";
  static REGISTER = "/auth/register";
  static FORGOT_PASSWORD = "/auth/forgot-password";
  static RESET_PASSWORD = "/auth/reset-password";

  static CAMPAIGN_DETAILS = (slug: string, id: string) =>
    `/campaigns/${slug}/${id}`;
  static BLOG_DETAILS = (slug: string) => `/blog/${slug}`;
  static USER_PROFILE = (username: string) => `/profile/${username}`;
}

export default Routes;
