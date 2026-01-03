
import { add_country_details } from "@src/apis/country/add-country/add-country.details";
import { delete_country_details } from "@src/apis/country/delete-country/delete-country.details";
import { get_country_list_details } from "@src/apis/country/get-country-list/get-country-list.details";
import { get_country_details } from "@src/apis/country/get-country/get-country.details";
import { update_country_details } from "@src/apis/country/update-country/update-country.details";
import { add_user_details } from "@src/apis/user/add-user/add-user.details";

export let api_list: any[] = [
    //Country
    get_country_details,
    get_country_list_details,
    add_country_details,
    update_country_details,
    delete_country_details,

    //User
    add_user_details,
]