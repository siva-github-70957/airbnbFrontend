export default function AddressLink({ place }) {
    return (
        <a className="my-2 block font-semibold   underline" target="_blank" href={"https://maps.google.com/?q=" + place.address}>{place.address}</a>
    )
}