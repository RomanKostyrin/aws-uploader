import { get, post, del, put } from "./api_helper";

export const postRefreshToken = (refreshToken: any) => {
  return post("api/auth/refresh", { refresh_token: refreshToken });
};

export const getAuthLink = () => {
  return get("api/auth/login-link");
};

export const postCheckAuthConfirmationStatus = (confirmationId) => {
  return post("api/auth/check-login-confirmation", { confirmationId });
};

export const getAttachmentById = (id, filename) => {
  return get(`api/appeals/attachments/${id}/${filename}`, {
    responseType: "blob",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const getFee = () => {
  return get("api/data/service_fee");
};
//adverts
export const putAdvert = (advert) => {
  return put("api/trader/adverts", advert);
};

export const updateAdvert = (advert) => {
  return put("api/trader/adverts", advert);
};

export const activateAdvertByCurrency = (coinExternalType, coinExternalIoType, isActive) => {
  return post("api/trader/adverts", {
    coinExternalType,
    coinExternalIoType,
    isActive,
  });
};

export const activateAdvertSessionById = (id, isActive) => {
  return post(`api/adverts_sessions/${id}`, {
    isActive,
  });
};

export const getMyAdverts = () => get("api/trader_operator/adverts/my");

//orders
export const getAllOrders = (filter) => {
  const status = filter?.status ? `statusIn=${filter?.status}` : "";

  return get(`api/trader_operator/orders?sortType=desc&${status}`);
};

export const acceptOrderById = (id) => post(`api/trader_operator/orders/${id}/accept`);

export const rejectOrderById = (id) => post(`api/trader_operator/orders/${id}/reject`);

export const createAppealByOrderId = (orderId) => post("api/appeals", { orderId });

export const getUserInfo = () => get("api/auth/profile");

export const getWallets = () => get("api/trader/wallets");

export const getCurrentWallet = () => get("api/wallets/current");

export const getCurrentPairs = () => get("api/data");

export const getPairsWithRates = () => get("api/data/pairs_with_rates");

export const voteForOrder = (vote) => post("api/vote/for_order", vote);

export const getBestBuyToSellRate = (currencies) => {
  return get(
    `api/trader_operator/adverts/best_internal_to_external_rate?coinExternalType=${currencies.coinExternalType}&coinExternalIoType=${currencies.coinExternalIoType}`,
  );
};

export const getWalletsPhrases = () => get("api/trader/wallets/phrases");

export const createTraderWallet = (phrases) => {
  return post("api/trader/wallets", { phrases });
};

export const resetTraderWallet = (id) => {
  return del("api/trader/wallets/reset", { data: { walletId: id } });
};

export const restoreTraderWallet = (data) => {
  return post("api/trader/wallets/restore", data);
};

export const selectCurrentWallet = (data) => {
  return post("api/trader/wallets/select", data);
};

export const createOperatorInvitationLink = () => {
  return post("api/trader/operator_invites");
};

export const postOperatorInvitation = (isAccepted, inviteCode) => {
  return post(`api/operator_invite/${inviteCode}`, { accept: isAccepted });
};

export const getInvitesLinks = () => get("api/trader/operator_invites");

export const deleteInviteLink = (id) => del("api/trader/operator_invites", { data: { operatorInviteId: id } });

export const getOperators = () => get("api/trader/operators");

export const deleteOperator = (id) => post("api/trader/operator_dismiss", { operatorId: id });
