import { create } from 'zustand';

const useFormStore = create((set) => ({
  step: 1,
  formData: {},
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  updateFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
  resetForm: () => set({ step: 1, formData: {}, showThankYou: false }),
  updateFileArray: (key, newFiles) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [key]: [...(state.formData[key] || []), ...newFiles],
      },
    })),
  removeFile: (key, fileToRemove) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [key]: state.formData[key].filter(
          (file) => file.name !== fileToRemove.name
        ),
      },
    })),
  showThankYouMessage: () => set({ showThankYou: true }),
}));
export default useFormStore;
