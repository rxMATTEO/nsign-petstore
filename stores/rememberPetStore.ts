import { Pet, Status } from '~/types/Pet/pet.d.ts';

export const useRememberPetStore = defineStore('rememberPetStore', {
  state: () => {
    const petFromCookie = useCookie('rememberPet');
    return {
      pet: petFromCookie.value || ''
    };
  },
  getters: {
    getRememberPet: (state) => {
      return state.pet;
    }
  },
  actions: {
    setRememberPet(pet: string) {
      const petFromCookie = useCookie('rememberPet');
      petFromCookie.value = pet;
      this.pet = pet;
      return pet;
    }
  }
});
