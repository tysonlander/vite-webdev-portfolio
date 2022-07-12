const PageSection = ({ children, backgroundColor }) => {
    return (
        <div className={backgroundColor ? backgroundColor : ''}>
            <div className="px-14">{children}</div>
        </div>
    );
};

export default PageSection;
