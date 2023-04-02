export default interface Props {
	name?: string,
	photo?: string,
	id?: number,
	description?: string,
	learnings?: string,
	docs_type?: string,
	docs_link?: string,
	addMargin: boolean,
	setAddMargin: React.Dispatch<React.SetStateAction<boolean>>
}
