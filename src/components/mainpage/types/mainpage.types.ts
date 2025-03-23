export interface CategoryStructure {
    key: string,
    name: string
}

export interface UserInfo {
    id: string,
    avatarUrl?: string,
    firstName: string,
    lastName: string,
    userTag: string,
    department: "android" | "ios" | "design" | "management" |
        "qa"  | "back_office" | "frontend" | "hr" | "pr" |
        "backend" | "support" | "analytics",
    position: string,
    birthday: string,
    phone: string,
    email?: string
}

export interface UserCardProps {
    user: UserInfo | null,
    showBirthday?: boolean
}

export interface UserListProps {
    users: Array<UserInfo> | null
}

export interface SortSelectProps {
    onClose: Function | undefined
}

export interface YearDividerProps {
    year: string | number
}