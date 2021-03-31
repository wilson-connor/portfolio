import React from 'react';

const codeBreaker = `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/777441388&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/woke-zan" title="WokeZan" target="_blank" style="color: #cccccc; text-decoration: none;">WokeZan</a> · <a href="https://soundcloud.com/woke-zan/code-breaker" title="Code Breaker" target="_blank" style="color: #cccccc; text-decoration: none;">Code Breaker</a></div>`;

const gyroFreak = `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/582456300&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/woke-zan" title="WokeZan" target="_blank" style="color: #cccccc; text-decoration: none;">WokeZan</a> · <a href="https://soundcloud.com/woke-zan/gyrofreak" title="GyroFreak" target="_blank" style="color: #cccccc; text-decoration: none;">GyroFreak</a></div>`;

const slowItDown = `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/598094124&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/woke-zan" title="WokeZan" target="_blank" style="color: #cccccc; text-decoration: none;">WokeZan</a> · <a href="https://soundcloud.com/woke-zan/slow-it-down" title="Slow It Down" target="_blank" style="color: #cccccc; text-decoration: none;">Slow It Down</a></div>`;

const Music = () => (
  <div>
    <h1 className="content-header">Check out my music!</h1>
    <div dangerouslySetInnerHTML={{ __html: codeBreaker }}></div>
    <div dangerouslySetInnerHTML={{ __html: gyroFreak }}></div>
    <div dangerouslySetInnerHTML={{ __html: slowItDown }}></div>
  </div>
);

export default Music;
