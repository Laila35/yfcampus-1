/**
 * @typedef {import("@prismicio/client").Content.CourseHighlightSlice} CourseHighlightSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CourseHighlightSlice>} CourseHighlightProps
 * @type {import("react").FC<CourseHighlightProps>}
 */
const CourseHighlight = ({ slice }) => {
    console.log(slice.primary.points)
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            
        </section>
    );
};

export default CourseHighlight;
