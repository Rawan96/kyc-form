import { create } from 'zustand';

const useFormStore = create((set) => ({
  step: 1,
  formData: {},
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  updateFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
  resetFormData: () => set({ formData: {} }),
}));
export default useFormStore;
