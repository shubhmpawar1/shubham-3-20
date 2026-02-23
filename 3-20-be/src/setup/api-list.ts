
import { add_country_details } from "@src/apis/country/add-country/add-country.details";
import { delete_country_details } from "@src/apis/country/delete-country/delete-country.details";
import { get_country_list_details } from "@src/apis/country/get-country-list/get-country-list.details";
import { get_country_details } from "@src/apis/country/get-country/get-country.details";
import { update_country_details } from "@src/apis/country/update-country/update-country.details";
import { add_user_details } from "@src/apis/user/add-user/add-user.details";
import { get_onboarding_questions_details } from "@src/apis/onboarding/get-onboarding-questions/get-onboarding-questions.details";
import { register_details } from "@src/apis/auth/register/register.details";
import { login_details } from "@src/apis/auth/login/login.details";
import { social_auth_details } from "@src/apis/auth/social-auth/social-auth.details";
import { save_onboarding_answers_details } from "@src/apis/onboarding/save-onboarding-answers/save-onboarding-answers.details";

export let api_list: any[] = [
    //Auth
    register_details,
    login_details,
    social_auth_details,

    //Country
    get_country_details,
    get_country_list_details,
    add_country_details,
    update_country_details,
    delete_country_details,


    //User
    add_user_details,

    //Onboarding
    get_onboarding_questions_details,
    save_onboarding_answers_details,

]
