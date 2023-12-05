



const errorCodeStyle = {
    fontSize: '5em',
    color: '#333',
};

const errorTextStyle = {
    color: '#666',
};

const NotFoundPage = () => (
    <div>
        <div>
            <div style={errorCodeStyle}>404</div>
            <div style={errorTextStyle}>Page Not Found</div>
        </div>
    </div>
);

export default NotFoundPage;
