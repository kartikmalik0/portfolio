import { Skeleton } from "../ui/suspense";


const getRandomWidth = () => {
    const minWidth = 3;
    const maxWidth = 6;
    return Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
};
const SkillsSuspense = ({length}:{length:number}) => {
    const array = new Array(length).fill(undefined);
    return (
        <>
            <ul className="flex w-full flex-wrap overflow-hidden gap-4 mb-6">
                {array.map((_, idx) => (
                    <li key={idx}>
                        <Skeleton style={{ width: `${getRandomWidth()}rem` }} className="h-8" />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default SkillsSuspense;
