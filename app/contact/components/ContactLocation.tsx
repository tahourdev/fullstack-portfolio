import React from 'react';

const ContactLocation = () => {
    return (
        <section className="w-full space-y-10 mt-10" data-page="contact">
            <header className="">
                <h2 className="text-3xl text-muted-foreground">Location Map</h2>
            </header>
            <div className="relative w-full overflow-hidden rounded-xl grayscale" data-mapbox>
                <figure className="">
                    <iframe
                        className="w-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.769820340536!2d104.92732147506912!3d11.568352044087542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095148fdcefea3%3A0xeef02689cbfb683f!2sWat%20Ounalom%20Monastery!5e0!3m2!1sen!2skh!4v1714280776665!5m2!1sen!2skh"
                        loading="lazy"
                        height={400}
                        title="Google Map"></iframe>
                </figure>
            </div>
        </section>
    );
};

export default ContactLocation;
