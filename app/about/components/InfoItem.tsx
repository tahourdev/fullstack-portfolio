interface InfoProps {
    label: string;
    value: string
}

const InfoItem: React.FC<InfoProps> = ({ label, value }) => {
    return (
        <div className="flex">
            <div className="w-[28%]">
                <p>{label}</p>
            </div>
            <div className="w-[15%] px-4">
                <p>:</p>
            </div>
            <div className="w-[75%] text-foreground font-bold">
                <p>{value}</p>
            </div>
        </div>
    );
};

export default InfoItem;
