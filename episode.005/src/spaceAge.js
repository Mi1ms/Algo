
export default function spaceAge(planet, nbr) {
    const earth_time = 31557600;
    const planet_time = {
        Mercury: 0.2408467,
        Venus: 0.61519726,
        Mars: 1.8808158,
        Jupiter: 11.862615,
        Saturn: 29.447498,
        Uranus: 84.016846,
        Neptune: 164.79132,
    };
    let age_on_earth = nbr / earth_time;

    if (planet === 'Earth') {
        return Number.parseFloat((age_on_earth).toFixed(2));
    } else {
        const rotation_pourcent = planet_time[planet]
        return Number.parseFloat((age_on_earth / rotation_pourcent).toFixed(2));
    }

}