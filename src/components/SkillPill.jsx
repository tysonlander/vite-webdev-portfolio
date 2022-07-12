const SkillPill = ({ text }) => {
    return (
        <button className="rounded-full bg-yellow-300 text-center px-4 py-3">
            <span className="text-base  font-medium text-yellow-800 ">
                {text}
            </span>
        </button>
    );
};

export default SkillPill;
