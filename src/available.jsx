import AvaiableSvgOne, { AvaiableSvgTwo } from "./assets/svg/available_svg";

const properties = [
  {
    id: 1,
    titel: "Modern Design villa in Ireland",
    price: "$4000.00",
    bedrooms: 4,
    bathrooms: 3,
    image:
      "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
  },
  {
    id: 2,
    titel: "Modern Apartment in New York",
    price: "$5000.00",
    bedrooms: 5,
    bathrooms: 2,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    titel: "Cozy Cottage in Switzerland",
    price: "$6000.00",
    bedrooms: 6,
    bathrooms: 3,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    titel: "Beach House in California",
    price: "$3500.00",
    bedrooms: 3,
    bathrooms: 2,
    image:
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    titel: "Penthouse in Dubai",
    price: "$7000.00",
    bedrooms: 6,
    bathrooms: 5,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
  },
];

export default function Available() {
  return (
    <section>
      <div className="container">
        <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
          <span className="mb-2 block text-lg font-semibold text-primary">
            Properties
          </span>
          <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
            Grab your Dream Property
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/*  Property Item 1 */}
          {properties.map((porperty) => (
            <div
              key={porperty.id}
              className="p-4 bg-white rounded-lg border border-gray-600/10"
            >
              <img src={porperty.image} alt={porperty.titel} />

              <div className="p-6">
                <h4 className="text-2xl font-bold cursor-pointer">
                  {porperty.titel}
                </h4>
                {/* <div>
                      2 beds &bull; 2 baths
                  </div>  */}
                <div className="mt-2">
                  <span className="text-xl font-extrabold text-blue-600">
                    {porperty.price}
                  </span>{" "}
                  /M
                </div>
              </div>
              <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
                <div className="flex items-center">
                  <AvaiableSvgOne />
                  <p>
                    <span className="font-bold text-gray-900">{porperty.bedrooms}</span> Bedrooms
                  </p>
                </div>
                <div className="flex items-center">
                  <AvaiableSvgTwo />
                  <p>
                    <span className="font-bold text-gray-900">{porperty.bathrooms}</span> Bathrooms
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
