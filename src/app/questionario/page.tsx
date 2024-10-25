
"use client"
import { CustomButton } from '@/components/button/custom-button';
import React, { useState } from 'react';

const TesteLideranca: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
        <h1 className="text-lg text-center font-bold text-blue-400 mb-4">Teste de Liderança - PRO Lidera Skills</h1>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Pergunta 2</h2>
          <p className="text-gray-700">
            Nam provident quos non debitis explicabo eos voluptatem autem aut tenetur suscipit sed
            autem perferendis aut assumenda saepe. Non tenetur culpa et asperiores quibusdam aut
            molestias aliquam qui deleniti aliquid. In omnis officiis est sapiente alias in labore
            voluptate ut magnam veniam eum culpa dolor et enim quidem?
          </p>
        </div>

        <form className="space-y-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="option1"
              name="question2"
              value="option1"
              checked={selectedOption === 'option1'}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <label htmlFor="option1" className="text-gray-700">
              Sed autem nostrum et soluta voluptas et magni blanditiis nam sint nesciunt est odit
              minima qui provident molestiae.
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              id="option2"
              name="question2"
              value="option2"
              checked={selectedOption === 'option2'}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <label htmlFor="option2" className="text-gray-700">
              Lorem ipsum dolor sit amet. Aut natus galisum sit ipsam voluptatem sit repellat corrupti
              qui reiciendis corrupti sed officia laboriosam aut velit reprehenderit non voluptatem
              porro.
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              id="option3"
              name="question2"
              value="option3"
              checked={selectedOption === 'option3'}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <label htmlFor="option3" className="text-gray-700">
              Ex accusantium saepe ex nobis reiciendis et porro odit sit suscipit rerum ut neque quod
              a suscipit perspiciais et eligendi corrupti.
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              id="option4"
              name="question2"
              value="option4"
              checked={selectedOption === 'option4'}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <label htmlFor="option4" className="text-gray-700">
              Est itaque aliquam 33 consequuntur pariatur aut nihil molestiae nam libero possimus vel
              iusto sunt a quibusdam magni est reiciendis dolores.
            </label>
          </div>
        </form>

        <div className="flex justify-between mt-6">
        <CustomButton onClick={() => { } }>Proximo </CustomButton>
        <CustomButton onClick={() => { } }>Anterior</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default TesteLideranca;
