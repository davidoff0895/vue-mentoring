import { computed, reactive } from 'vue';
import { User } from '@/types/user.ts';
import { UserTypes } from '@/enums/user.ts';

export const state: {user: User} = reactive({
  user: {} as User,
});

export default function useUserModule () {
  const setUser = (val: User) => {
    state.user = val;
  };
  const loginUser = () => {
    state.user = {
      id: 1,
      name: 'John Doe',
      imgUrl: 'https://randomuser.me/api/portraits/men/85.jpg',
      type: UserTypes.USER,
    }
  };
  const logoutUser = () => {
    state.user = {} as User;
  };
  return {
    getUser: computed(() => state.user),
    loginUser,
    logoutUser,
    setUser,
  };
}