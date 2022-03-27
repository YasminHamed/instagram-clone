import React, { useState, useEffect } from 'react';
import axios from "axios";
import posts from './posts.css';
import Comment from '../Comment/Comment';

function Posts() {
  const[posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("Js/data.json")
    .then((response) =>{
      setPosts(response.data.posts)
    })
  }, [])

  

  const postsList = posts.map((post) => {
    return (
      <div className="card">
        <header className="row">
          <img className="profilephotoo" src={post.profilephoto} alt="" />
          <h5 className="username">{post.username}</h5>
        </header>
        <div>
          <img width="100%" height="550px" src={post.image} alt="" />
        </div>
        <div className="row">
          <img className='icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABnUlEQVRYhe3WvWoUURTA8V9ShEXRdHYhPoJVarWQbQLa+FGqYKKCL6CtaJVEQ0R9BgtNF9QHMPgOmsKNaKM2GiKsRc6yp5idzG5mVpEcuAx7z8f/f/cOy3IYh/GPxiSuYB0d/MYXvMFVtAp6WriGt/gaPR28wqWYWSlO4j26JeszzqeeC7FX1rOJ2Srw3qAPuIEZTEXuNrbS0Pt4kD5/xK2onYrexdjvYrtMYjKdfAPHBtS1cA+7CbyLu4qvBo7jddS+M+A6LqeTD4LnOIvv+IYzFeqn9b+9i0UF65FcqDCsF6djVY2bwXhZlOxEcmaIgcPGbDA+FSV3InmkQYGjwfjV28gvQyeepxoUmIvndlFyxZ7diwYFNoKxWpQ8gR9RcL0B+ELM/qnkPVtMRe0a4W17997Fnf2Kl2qWaMesLparNj2Mhh3MHwB+bhR4XRIZvoKJYQdM4NGIEhn+dBT4QSRqg48ikeHP6oBnicf7SDQGryKR4c+bgJdJjA2eJdb0f6x68LVxwLPEqv5fsrGcvEjiSayxw7PEX4P/H/EH2TWV+4q5uu4AAAAASUVORK5CYII="/>
          <img  className='icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADzElEQVRoge3Z62tcRRjH8U/aJKZNNWmkL/pCi2nUWq0WLN7witB/QUq9vPVKFcFLFUXBl4Iogm99UVQEry3FomCpVqv1ElvpRa2oELSoaFttWkjii2dOclJ2k92zZ7cr5AuHw56Zeeb37Dkz88wzzDHHHDPRUaKtc3E11mAIg1iEvlT+N47iEH7A5/gEv5SooTBDeBp7MVHlOpquauXf4Cksb7F2cB22Yiwn6Gs8j/XirQxUaDeQym7FCxjOtR/DFlzTZO2If21LrvNDeBTnNWBzEBvxY87uOw3arEoH7sc/qaMDuAXzSuxjHtbhYOrjGO4r0b5FeD0ZPy7eQGeZHZxCFx7DaOrzVfQ2anQAnyaDB3FJowbr4FJ8l/reif6ihs7El8nQh6am0VbSj+1Jw27xddTFfDErTWAbFpSprk4W4oOkZbPQVjOPp4bDOKt0afXThz1C0yO1NroMJ8Uidn5zdBXiQjFrnlDjWH1feH53E0UVZYPQ9t5sFW9MFb/V3Cm2KF3YJzReP1PFN1Kl9S0QVZTbhcbXqlXoF2PjMLpbJKoIZ+B3MVYmJ6J8iLFWvLrNwqF25YTQ2C00Y7ojWdS5rYWiipJpnIyU846sSvfhlskpTqZxVaXCA2IQtfP4yOgRWvdnD/JvpE9Et+08PjJG0zUZ/+UdmVDu/qLZdAjNmC78TzG1LWy1ogL0CK1Hsgd5R35N93NaqaggWaJiMgOTd2R3ul/RMjnFWZ3ue7IHeUd2pfsNLZNTnGwh/LhSYa/Y8GdjpV3pESHKqNjFVmST9g8a7xAaX5mp0uUYF4tju4bx+4Uj185W+a1UcUOTRRXhAaFtay2VB8VY+RcrmiiqXi4SmkZxca2N7hGe78Xi5uiqi36xa53AQ/U07MDLpnJap3O1700aJvC2AmFUt6l80k6cXaa6GunHjqRhlwZSpwvEbixLma4pQ12NrMb3qe+PlJDp7MKLyeBJPNyowVnoxhOmktiblJDEzrMuGT5cptEcnbhNHMtlJ113NqOj5aa+1TIZEinan5P9cbyJZfUYqWf1virdv6hSvhFLxZngMH7CXyLrkbFEnEStwJUiIbgylY3jXTyj/D9rGtmR29pTnnfiOdUPO4+LBbZa+Vd4UoNHbbUeTy8Vr35ErPxj6fkFeAk34TcR1iwT2Y1BsZguFs4eEUfU2fH0Z+J4eqQRB+ol+8fvSr+X4Fnx2UyIfGw7hTMVWSkEH8ODIqjMHMjC6ar7gnZhvliMKn3b23Hz6ZM2ndlmrXvFGxnBH+IsfIcY+PuaK22O/zf/AZh9+Zk/uRRIAAAAAElFTkSuQmCC"/>
          <img className='icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEQUlEQVR4nO3bW4hVVRzH8c94CXUIUixBKwhqJH0qrQiEgnyozIrClxKrl+iC+ZJWRBBFKD0VEeJL1EBEJmJEEJX1kBSE0HUwIqEMMrpL5Wil08Pah71nzj5nzr6cdcbxfOHAnL3XWv//b+11/mut/9pDnz59+vTpMx1ZioewE5f02JcoDGAlnsIIxjKfl1tVmhXFte4xE1fiBtyKC1uU+yyaRxGYg9V4Fj8a/6RbfZb2xNMamY/12IW/NAv8B2/jzZx7Iz3wtxbOxga8geOahR1N7t2Nc3AtRnPKPRnb8SoMYQs+wgnNYn7Bi7gJczP11uBYUuaY8SNhZSTfS7Mcj2O//N/vIezAWszOqZ998sdxI95Nvn8vzA5TiplYhW34Wr7og0KQW6W9gDzxZwkxYSxpY0qQjdyH5YseEUbCsg7bzBNPiBuNNq+ux/1yDArDdhhHNAv+D/uwCecWbLuVeNgtjRfR1zkLtY/co8ZH7jK0Ez9XOk2+ULL9wlwgPMV98iP3b8J6fAPOrGirnXi4OWN3bUVbbZkscv8kDP21OKMmm5OJh5eS+39jXk12UW/kLkMn4mfh56TMrjqMFoncK+ow2IJOxMM1Gb9ur2p0s/w197/Yi404r6qRDpi4wlvTpuxz0n3B/KqGv9MsfjcWVW24AEXEDwirvjFhU1SZ6/Cp5k74AVtxUR1G2lBEPFwm9fHeOh1ZLgS+XzV3xn5hPh+s06DOf/NZtiblT2Bxzf4gBMR1eAcnje+II8JmZVUNdsqIhwNJnQ9r8GFShoRRkZeNGRESkQtLtFtW/MUZ+1tK2C3NTGGa3CnMDtmOOJZcX62zNUFZ8fBIxm7PUl+LhSf/jeZRcUgYMee3qFtFPHyc1P2ysNddYIYQC3YIy9FsR5wQYsg6aWKjqvgl0pg05VJfC/AAPpc/nW5XbKrL4/5Mm91cjVZmhbCkzptOyzz5BnuTNr41BVNfeQziTmHr3OiA7SXbWmAKpr6K0OiEw/KTnZNxh7QTr6rRr2jcpVryYo8epr7qYFCaK9xTsO486SwTLfXVDXZIt9lF1vC3iJT66jaXS4U8XKDecFLnT+NPiE5JGtvugzqbymZLp9PXuuhXNDYpFs1XZ8rf1kW/orFAuhwe7qD882pMfU0VXhFEHdVeVDb19VYEv6KRHdb3tSl3RabcPRH8isaAdCvd7n2ebbqc+uolj0mf7qUtynwlYuorNkuEE+MxIdBNZJm0gzZH9CsqjVdb/tB8tveotAOGIvsVjewSd/2Ee42D2C9iOxWTWdJzyPcz17Opryd64FdUnhaEnpSeQG2Ujoxp/97vkPRpb02uvecUS31V5QNptmiR9NzhmV46FZNsumt35u+evvUVk7n43fjscVdSXzPqbrAmRvHqhGuvCwul04bsmf+Y8D8Bpx2fSFNfc3rsS0+4Xnhd58FeO9KnT58+05L/AdJDyWEDnCrmAAAAAElFTkSuQmCC"/>
        </div>
        <div>
          <h5 className="like">{post.likes} Likes</h5>
          <p> <span className="user">{post.username}</span>{post.caption}</p>
          <h6 className="time">{post.time}</h6>
        </div>
        <hr />
        <div>
          <Comment/>
        </div>
    </div>
    )
  })
  return (
    <div className="mt-4">
      {postsList}
    </div>
  )
}

export default Posts