import React from 'react';
import Tournament from './Tournament';
import Login from './Login';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
const Home = () => {
  const [searchValue, setSearchValue] = React.useState('');
const navigate=useNavigate();
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleLogin=()=>{
navigate("./login")
  }

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f1f4f0] px-10 py-3">
        <Logo/>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
            
              <a className="text-[#121711] text-sm font-medium leading-normal" href="tournament">Fixtures</a>
              <a className="text-[#121711] text-sm font-medium leading-normal" href="news">News</a>
              <a className="text-[#121711] text-sm font-medium leading-normal" href="blogs">Blogs</a>
              <a className="text-[#121711] text-sm font-medium leading-normal" href="quiz">Quiz</a>
            </div>
            <div className="flex gap-3">
            <button onClick={handleLogin}
  className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-[#f1f4f0] text-[#121711] text-sm font-bold leading-normal tracking-[0.015em]"
>
 
  <span className="truncate">Log in</span>
  
</button>

            </div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/3e91c6f6-0fd6-407b-947d-bdd5c922a235.png")`,
                  }}
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1
                      className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                      The Ultimate Cricket Experience
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Watch live cricket matches and highlights
                    </h2>
                  </div>
                  <label
  className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16"
  style={{ marginBottom: '20px' }} // added some space below the label
>
  <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
   
    
  </div>
</label>
                </div>
              </div>
            </div>
            <div className="pb-3">
              <div className="flex border-b border-[#dde5dc] px-4 gap-8">
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#121711] text-[#121711] pb-[13px] pt-4" href="#">
                  <p className="text-[#121711] text-sm font-bold leading-normal tracking-[0.015em]">Live Now</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#6a8764] pb-[13px] pt-4" href="tournament">
                  <p className="text-[#6a8764] text-sm font-bold leading-normal tracking-[0.015em]">Upcoming</p>
                </a>
              
              
              </div>
            </div>
        
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/MbdWVX2jUhA?si=-IorQxXSGd92Cat6"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  />

            <h2 className="text-[#121711] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Series</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-10 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/1758fd3c-0d2f-4d40-b384-dcfda629745e.png")`,
                  }}
                ></div>
                <div>
                  <p className="text-[#121711] text-base font-medium leading-normal">England vs South Africa</p>
                  <p className="text-[#6a8764] text-sm font-normal leading-normal">1st T20I</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/58c62139-4a2b-43d4-bbde-39f0690659b5.png")`,
                  }}
                ></div>
                <div>
                  <p className="text-[#121711] text-base font-medium leading-normal">India vs Australia</p>
                  <p className="text-[#6a8764] text-sm font-normal leading-normal">2nd Test</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/e0c3d455-4e1b-4a7a-96a5-5a9b86d75eb7.png")`,
                  }}
                ></div>
                <div>
                  <p className="text-[#121711] text-base font-medium leading-normal">New Zealand vs Sri Lanka</p>
                  <p className="text-[#6a8764] text-sm font-normal leading-normal">3rd ODI</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/e0c3d455-4e1b-4a7a-96a5-5a9b86d75eb7.png")`,
                  }}
                ></div>
                <div>
                  <p className="text-[#121711] text-base font-medium leading-normal">New Zealand vs Sri Lanka</p>
                  <p className="text-[#6a8764] text-sm font-normal leading-normal">4th ODI</p>
                </div>
              </div>
             
              </div>
            <h2 className="text-[#121711] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Latest News</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage: `url("https://cdn.usegalileo.ai/stability/2752ee35-3159-4997-9cea-1a1537f15863.png")`,
                  }}
                ></div>
                <div>
                  <p className="text-[#121711] text-base font-medium leading-normal">Australia announce squad for the Ashes</p>
                  <p className="text-[#6a8764] text-sm font-normal leading-normal">2 hours ago</p>
                </div>
              </div>
              
            </div>
          </div>
          </div>
      </div>
   </div>

  );
};

export default Home;
