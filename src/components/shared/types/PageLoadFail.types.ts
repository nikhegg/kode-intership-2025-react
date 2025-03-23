export interface LoadFailButtonProps {
    onClick: Function,
    text: string
}
export interface LoadFailProps {
    icon: string,
    title: string,
    descriptiption: string,
    button?: LoadFailButtonProps | null
}