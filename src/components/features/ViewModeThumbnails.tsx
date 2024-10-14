import { useEffect, useState } from "react";
import { getProgramThumbnailByID } from "../../api/programs";

interface IProps {
    programID: string
}

export const ViewModeThumbnails: React.FC<IProps> = (props) => {

    const {
        programID,
    } = props;

    const [ thumbnail, setThumbnail ] = useState<Blob | null | undefined>();

    useEffect(() => {
        const fetchProgramThumbnail = async (programID: string) => {
            const fetchedThumbnail = await getProgramThumbnailByID(programID);
            setThumbnail(fetchedThumbnail);
        };
        fetchProgramThumbnail(programID);
    }, []);

    return (
        <>
            { thumbnail instanceof Blob &&
                <div>
                    <img style={ { height: '180px', width: '100%', objectFit: "cover"  } } src={ URL.createObjectURL(thumbnail) } />
                </div>
            }
        </>
    );
};
