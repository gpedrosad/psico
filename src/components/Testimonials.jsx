import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Juan Pérez',
    comment: 'Excelente servicio, muy recomendable.',
    rating: 5,
  },
  {
    id: 2,
    name: 'María García',
    comment: 'Muy satisfecho con los resultados.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Carlos López',
    comment: 'Buena atención, pero podría mejorar en algunos aspectos.',
    rating: 3,
  },
];

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    );
  }
  return <div className="flex">{stars}</div>;
};

const TestimonialCard = React.forwardRef(({ name, comment, rating }, ref) => (
  <div
    ref={ref}
    className="bg-white rounded-lg shadow-md p-6 m-4 w-full md:w-1/3 opacity-0 transform translate-y-20"
  >
    <h3 className="text-lg font-semibold mb-2">{name}</h3>
    <p className="text-gray-700 mb-4">{comment}</p>
    <StarRating rating={rating} />
  </div>
));

const Testimonials = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${index * 0.3}s`;
            entry.target.classList.add('slide-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-wrap justify-around p-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={testimonial.id}
          name={testimonial.name}
          comment={testimonial.comment}
          rating={testimonial.rating}
          ref={(el) => (cardRefs.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default Testimonials;