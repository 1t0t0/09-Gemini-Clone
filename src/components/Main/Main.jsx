import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'


const Main = () => {

    const {
        onSent,
        resentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        handleKeyDown

    } = useContext(Context)
    console.log(resentPrompt)


    return (

        < div className="main" >
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_Icon} alt="" />
            </div>

            <div className="main-container">
                {!showResult ?
                    <>
                        <div className="greet">
                            <p><span>Hello,Dev.</span></p>
                        </div>
                    </> : <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_Icon} alt="" />
                            <p>{resentPrompt}</p>
                        </div>
                        <div className="result-data img1">
                            {loading ?
                                <img className='spin-img' src={assets.gemini_icon} alt="" /> :
                                <img src={assets.gemini_icon} alt="" />
                            }
                            {loading
                                ?
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div> :
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>
                    </div>
                }




                <div className="main-bottom">
                    <div className="search-box">
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <input onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} value={input} type="text" placeholder="Ask Gemini" />
                            {!input ? <img src={assets.mic_icon} alt="" /> : null}
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                        </div>
                    </div>
                </div>
            </div>


        </div >

    )
}

export default Main