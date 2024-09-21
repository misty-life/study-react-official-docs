// props의 기본값은 전달되지 않거나 undefined로 전달되는 경우에 사용된다.
// null이나 0이 전달되는 경우는 기본값이 사용되지 않는다.
export function getImageUrl(person, size = 's') {
    return (
        "https://i.imgur.com/" + person.imageId + size + ".jpg"
    );
}