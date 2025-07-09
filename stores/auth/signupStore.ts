import { create } from "zustand";

const useSignupStore = create<SignupStore>((set) => ({
    data: {
        firstName: "",
        lastName: "",
        email: "",
        emailVerified: false,
        phone: "",
        phoneVerified: false,
        username: "",
        password: "",
    },
    step: 1,
    next: () => set((state) => ({ step: state.step + 1 })),
    back: () => set((state) => ({ step: state.step - 1 })),
    goTo: (step) => set(() => ({ step })),
    update: (values) =>
        set((state) => ({
            data: { ...state.data, ...values },
        })),
    reset: () =>
        set(() => ({
            data: {
                firstName: "",
                lastName: "",
                email: "",
                emailVerified: false,
                phone: "",
                phoneVerified: false,
                username: "",
                password: "",
            },
            step: 1,
        })),
}));
export default useSignupStore;
