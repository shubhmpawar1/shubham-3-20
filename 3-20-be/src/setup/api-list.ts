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
import { logout_details } from "@src/apis/auth/logout/logout.details";
import { video_feedback_details } from "@src/apis/feedback/video-feedback/video-feedback.details";
import { add_favourite_video_details } from "@src/apis/favourite/add-favourite-video/add-favourite-video.details";
import { remove_favourite_video_details } from "@src/apis/favourite/remove-favourite-video/remove-favourite-video.details";
import { get_favourite_videos_details } from "@src/apis/favourite/get-favourite-videos/get-favourite-videos.details";
import { save_video_note_details } from "@src/apis/notes/save-video-note/save-video-note.details";
import { edit_video_note_details } from "@src/apis/notes/edit-video-note/edit-video-note.details";
import { delete_video_note_details } from "@src/apis/notes/delete-video-note/delete-video-note.details";
import { get_quick_facts_details } from "@src/apis/fact/get-quick-facts/get-quick-facts.details";
import { get_home_details_details } from "@src/apis/home/get-home-details/get-home-details.details";
import { get_user_activity_details } from "@src/apis/activity/get-user-activity/get-user-activity.details";

export let api_list: any[] = [
    //Auth
    register_details,
    login_details,
    social_auth_details,
    logout_details,

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

    //Feedback
    video_feedback_details,

    //Favourite
    add_favourite_video_details,
    remove_favourite_video_details,
    get_favourite_videos_details,

    //Notes
    save_video_note_details,
    edit_video_note_details,
    delete_video_note_details,

    //Quick Facts
    get_quick_facts_details,

    //Home  
    get_home_details_details,

    //Activity
    get_user_activity_details,
]