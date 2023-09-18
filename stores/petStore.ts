import { Pet, Status } from '~/types/Pet/pet.d.ts';

export const usePetStore = defineStore('petStore', {
  state: () => {
    return {
      status: {
        available: Status.available,
        pending: Status.pending,
        sold: Status.sold
      }
    };
  },
  getters: {
    getStatus: (state) => {
      return state.status;
    }
  },
  actions: {
    async fetchPetByStatus (status: Status): Promise<Pet[]> {
      const { public: { API_URL } } = useRuntimeConfig();
      return await $fetch(`${API_URL}/pet/findByStatus?status=${status}`);
    },

    async fetchPetById (id: number): Promise<Pet> {
      const { public: { API_URL } } = useRuntimeConfig();
      return await $fetch(`${API_URL}/pet/${id}`);
    }
  }
});
