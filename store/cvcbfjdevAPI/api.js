import axios from "axios"
const cvcbfjdevAPI = axios.create({
  baseURL: "https://cvcbfj-dev-131740.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return cvcbfjdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return cvcbfjdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return cvcbfjdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return cvcbfjdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return cvcbfjdevAPI.patch(`/rest-auth/user/`, payload)
}
function api_docs_schema_retrieve(payload) {
  return cvcbfjdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function rest_auth_login_create(payload) {
  return cvcbfjdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return cvcbfjdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_registration_create(payload) {
  return cvcbfjdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return cvcbfjdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_change_create(payload) {
  return cvcbfjdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return cvcbfjdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return cvcbfjdevAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return cvcbfjdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create
}
