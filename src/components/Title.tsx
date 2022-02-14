type TitelProps = {
    
};
export const Title:React.FunctionComponent<TitelProps> = (props) => {
    return (
        <div className="text-5xl leading-normal text-gray-700 dark:text-white">
            {props.children}
        </div>
    );
};