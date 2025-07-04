import { GlassBlock } from "./glassBlock";
import { editData } from "../../../assets/glassData";

export function GlassWrapper() {
    return (
        <div className="edit-wrapper">
            {editData.map(edit => (
                <GlassBlock key={edit.id} srcS={edit.srcS} id={edit.id} description={edit.Description} />
            ))}
        </div>
    )
}