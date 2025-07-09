interface SignupData {
    firstName: string;
    lastName: string;
    email: string;
    emailVerified: boolean;
    phone: string;
    phoneVerified: boolean;
    username: string;
    password: string;
}

interface SignupStore {
    data: SignupData;
    step: number;
    next: () => void;
    back: () => void;
    goTo: (step: number) => void;
    update: (values: Partial<SignupData>) => void;
    reset: () => void;
}
