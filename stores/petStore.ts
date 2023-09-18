import { Status } from '~/types/Pet/pet.d.ts';

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
  }
});
