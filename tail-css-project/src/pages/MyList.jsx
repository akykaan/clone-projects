import React from "react";

export default function MyList() {
  return (
    <div className="container mx-auto px-8 bg-black">
      <div className=" pt-8">
        <p className="text-2xl text-left md:text-lg text-white">Listem</p>
      </div>

      <div class="text-white  grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
    </div>
  );
}
