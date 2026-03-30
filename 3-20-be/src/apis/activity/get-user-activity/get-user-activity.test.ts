import { get_user_activity_tests_interface } from "./get-user-activity.interface"

export let get_user_activity_tests: get_user_activity_tests_interface[] = [
  {
    name: 'Should return activity for authenticated user',
    input: {
      user: { id: 1 },
      page: 1,
      limit: 10
    },
    check_output: (input, output) => {
      if (output.code !== 200) throw new Error(`Expected code 200, got ${output.code}`)
      if (!output.data) throw new Error('Expected data in response')
      if (!output.data.today_videos) throw new Error('Expected today_videos in response')
      if (!output.data.tomorrow_recommendations) throw new Error('Expected tomorrow_recommendations in response')
      if (!output.data.last_week_videos) throw new Error('Expected last_week_videos in response')
      if (!output.data.daily_essentials) throw new Error('Expected daily_essentials in response')
    }
  },
  {
    name: 'Should return 401 for unauthenticated user',
    input: {
      user: undefined,
      page: 1,
      limit: 10
    },
    check_output: (input, output) => {
      if (output.code !== 401) throw new Error(`Expected code 401, got ${output.code}`)
    }
  },
  {
    name: 'Should return paginated results',
    input: {
      user: { id: 1 },
      page: 1,
      limit: 5
    },
    check_output: (input, output) => {
      if (output.code !== 200) throw new Error(`Expected code 200, got ${output.code}`)
      if (output.data.today_videos.pagination.limit !== 5) throw new Error('Expected limit 5 in pagination')
    }
  }
]