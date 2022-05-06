import './About.css';

const About = () => {

    return (
        <div className="about-bg">
            <div className="about">
                <img src="https://i.pinimg.com/originals/d9/a7/88/d9a788234bfc7859095470f63e472add.png" alt="" width="100%" />
                <h1>About Studio Ghibli</h1>
                <div className="about-container">
                    <ol>
                        <h2>Table of Contents</h2>
                        <li>
                            <a href={`#sg-content`}>Studio Ghibli</a>
                        </li>
                        <li>
                            <a href={`#miyazaki-content`}>Hayao Miyazaki</a>
                        </li>
                        <li>
                            <a href={`#films-content`}>Films</a>
                            <ul>
                                <li>Castle in the Sky</li>
                                <li>My Neighbor Totoro</li>
                                <li>Grave of the Fireflies</li>
                                <li>Kiki's Delivery Service</li>
                                <li>Porco Rosso</li>
                                <li>Princess Mononoke</li>
                                <li>Spirited Away</li>
                                <li>Howl's Moving Castle</li>
                                <li>Ponyo</li>
                                <li>The Secret World of Arrietty</li>
                                <li>From Up on Poppy Hill</li>
                                <li>The Wind Rises</li>
                            </ul>
                        </li>
                        <li>
                            <a href={`#museum-content`}>Museum</a>
                        </li>
                    </ol>
                    <div className="about-content-body">
                        <div id="sg-content">
                            <div>
                                <h2>Studio Ghibli</h2>
                                <p>
                                    Studio Ghibli was founded in 1985 by animated film directors Isao Takahata and Hayao Miyazaki, and has produced twenty-two feature-length films.  Most Studio Ghibli films ranked number one at the box office in Japan in the year in which they were released.  SPIRITED AWAY, directed by Hayao Miyazaki and released in 2001, is the all-time highest grossing film in Japan, earning over 30 billion yen at the box office.

                                    Studio Ghibli films have garnered numerous awards and critical acclaim from film critics and animation specialists around the world.  SPIRITED AWAY was awarded the Golden Bear as the Best Feature Film at the 2002 Berlin International Film Festival and won the 2002 Academy Award for Best Animated Feature Film.  In October 2001, Studio Ghibli, in conjunction with The Tokuma Memorial Cultural Foundation for Animation, founded the Ghibli Museum, Mitaka, designed by Hayao Miyazaki.

                                    THE WIND RISES (2013), THE TALE OF THE PRINCESS KAGUYA (2013), WHEN MARNIE WAS THERE (2014) and THE RED TURTLE (2016), the last four films released by Studio Ghibli, have earned the studio four consecutive Academy Award nominations for Best Animated Feature Film.  The studio is currently working on a new production.
                            </p>
                            </div>
                        </div>
                        <div id="miyazaki-content">
                            <div className="miyazaki-description">
                                <img src="https://cdn.britannica.com/15/201115-050-9CCC50F9/Miyazaki-Hayao-2008.jpg" alt="" />
                                <h2>Hayao Miyazaki</h2>
                                <div className="details">
                                    <p>
                                        <b>Born: </b>
                                        January 5th, 1941 (age 81) in &nbsp;
                                        <a href="https://www.google.com/search?q=Bunkyo" target="_blank">Bunkyo City, Tokyo, Japan</a>
                                    </p>
                                    <p>
                                        <b>Spouse: </b>
                                        Akemi Ōta
                                    </p>
                                    <p>
                                        <b>Children: </b>
                                        Gorō Miyazaki &amp;
                                        Keisuke Miyazaki
                                    </p>
                                </div>
                            </div>
                            <div className="miyazaki-bio">
                                <p>
                                    Hayao Miyazaki (宮崎 駿, Miyazaki Hayao, [mijaꜜzaki hajao]) is a Japanese animator, director, producer, screenwriter, author, and manga artist. A co-founder of Studio Ghibli, he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films, and is widely regarded as one of the most accomplished filmmakers in the history of animation.
                            </p>
                                <p>
                                    Miyazaki’s father was the director of Miyazaki Airplane, a manufacturing concern that built parts for Zero fighter planes. The family business instilled in Miyazaki a love of flying that became apparent in virtually all of his work. After having completed studies in economics at Gakushūin University, Tokyo, in 1963, he took a position as an entry-level animator at Tōei Animation, a division of the Tōei studio and Asia’s largest producer of animation. While at Tōei, he met fellow animators Takahata Isao and Ōta Akemi. The former became a lifelong friend, collaborator, and business partner, and the latter, after a one-year courtship, became his wife. Miyazaki moved through the ranks at Tōei, working on such projects as the television series Ōkami shōnen Ken (“Wolf Boy Ken”) and Takahata’s feature directorial debut, Taiyō no ōji: Horusu no daibōken (1968; Little Norse Prince). After leaving Tōei in 1971, Miyazaki, accompanied by Takahata, continued to work for various studios throughout the 1970s. Highlights from this period included the Panda kopanda (Panda! Go Panda!) film shorts and Miyazaki’s first full-length film, Rupan sansei: Kariosutoro no shiro (1979; Lupin III: Castle of Cagliostro), an adventure story featuring the gentleman thief Lupin and his compatriots.
                            </p>
                                <p>
                                    Miyazaki’s individual style became more apparent in Kaze no tani no Naushika (Nausicaä of the Valley of the Wind), a monthly manga (Japanese cartoon) strip he wrote for Animage magazine. The story followed Naushika, a princess and reluctant warrior, on her journey through an ecologically ravaged world. Its success inspired a film of the same name (released in 1984) and encouraged Miyazaki and Takahata to undertake a more permanent partnership arrangement. Together they launched Studio Ghibli in 1985.
                            </p>
                            </div>
                        </div>
                        <div id="films-content">
                            <h2>Films</h2>
                            <p>
                                <img src="https://m.media-amazon.com/images/M/MV5BMTg1NzkyNDk4N15BMl5BanBnXkFtZTgwMDE2MDIyMDE@._V1_.jpg" alt="" />
                                Miyazaki and Studio Ghibli continued to produce works for the domestic market, however. His Tonari no Totoro (My Neighbor Totoro) debuted alongside Takahata’s Hotaru no haka (Grave of the Fireflies) in 1988. While both films were well received critically, the financial success of the studio was secured by the phenomenal sale of Totoro merchandise. Miyazaki followed with Majo no takkyūbin (1989; Kiki’s Delivery Service), the story of a young witch’s coming of age, and Kurenai no buta (1992; Porco Rosso), an adventure yarn about a World War I flying ace who has been cursed to have the face of a pig. These successes set the stage for 1997’s Mononoke-hime (Princess Mononoke), a blockbuster that broke Japanese box-office records. The film revisited some of Miyazaki’s recurring themes, such as the conflict between human progress and natural order and the persistence of the spiritual world alongside the mundane. In addition, its depiction of kodama (Japanese tree spirits) as white humanoid creatures with clattering heads provided one of the more enduring images in anime.
                            </p>
                            <p>
                                <img className="film-2n" src="https://m.media-amazon.com/images/M/MV5BNzQ0OTcwNDY3MF5BMl5BanBnXkFtZTgwODc1MTMyMDE@._V1_.jpg" alt="" />
                                Miyazaki’s Sen to Chihiro no kamikakushi (2001; Spirited Away) captured the top prize at the 2002 Berlin International Film Festival, won best Asian film at the Hong Kong Film Awards, and was named best animated feature at the 2003 Academy Awards. In his native Japan it won best picture at the 2002 Japanese Academy Awards and replaced Titanic as the top-grossing film in Japanese history. In the film, Chihiro, an ordinary if slightly spoiled young girl, wanders away from her parents and enters a realm of gods and magic. There, dubbed with the name Sen, she is forced to make do with her wits in an effort to reclaim her name and return to the human world.
                            </p>
                            <p>
                                <img src="https://cdn.vox-cdn.com/thumbor/hHzi56bzWh3TaLYx7mHlRHe8UCk=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20007566/GHI_HowlsMovingCastle_Select1.jpg" alt="" />
                                Miyazaki followed the phenomenal success of Spirited Away with Hauru no ugoku shiro (2004; Howl’s Moving Castle), the story of a young girl cursed with the body of an old woman and the quest that leads her to a legendary moving castle; it was nominated for an Academy Award in 2006. In 2005 Disney unveiled a restored version of Nausicaä on DVD. Featuring both the original Japanese sound track as well as a new professionally recorded English dub, this release marked the first time that the film was commercially available in its original form in the United States. Gake no ue no Ponyo (2008; Ponyo) was targeted to a younger audience than were most Miyazaki films, but nevertheless it was the top Japanese box-office draw of 2008. Miyazaki later cowrote the screenplays for the Studio Ghibli releases Karigurashi no Arietti (2010; The Secret World of Arrietty), which was based on Mary Norton’s children’s book The Borrowers, and Kokurikozaka kara (2011; From Up on Poppy Hill), a coming-of-age tale adapted from a manga series. The latter film was directed by Miyazaki’s son Gorō.
                            </p>
                            <p>
                                <img className="film-2n" src="https://i1.sndcdn.com/artworks-000300704310-0nsub8-t500x500.jpg" alt="" />
                                Kaze tachinu (2013; The Wind Rises) was an impressionistic take on the life of engineer Horikoshi Jiro, who designed fighter planes used by the Japanese during World War II. The film was based on Miyazaki’s manga of the same name, and it was nominated for an Academy Award in 2014. Miyazaki declared that Kaze tachinu would be his last feature-length film, and he began work on Kemushi no Boro (Boro the Caterpillar), a short film for the Ghibli Museum in Mitaka. Miyazaki’s retirement appeared to be temporary, however; in 2016 he announced that Kemushi no Boro would be expanded to a feature-length release. The film marked Miyazaki’s first project to be done entirely in computer animation. In 2015 he received an honorary Oscar from the Academy of Motion Picture Arts and Sciences.
                            </p>
                        </div>
                        <div id="museum-content">
                            <h2>Studio Ghibli Museum</h2>
                            <p>
                                <img src="https://tokyo.for91days.com/wp-content/uploads/sites/16/2017/04/Studio-Ghibli-Tour-01-20140514-www.for91days.com-DSC04739.jpg" alt="" />
                                When you walk along Kichijoji Avenue, in the shade of the tall green trees of Mitaka's Inokashira Park, you come upon a colorful building. Standing in front of a sign that says "Ghibli Museum, Mitaka", a very large Totoro welcomes you at the entrance. When you look through the portholes, soot-black Dust Bunnies are there as well. But this is not the real entrance. Totoro shows you where the real entrance is.
                            </p>
                            <p>
                                <img src="https://media.cntraveler.com/photos/5c866698ff5475304621749f/16:9/w_2560,c_limit/Ghibli%20Museum_R061NH.jpg" alt="" />
                                Open the door and welcome to wonderland! Every window and lamp is lovingly hand-crafted with beautiful and colorful stained glass using Ghibli characters, pretty plants and flowers, and forest animals. When the sun is shining, the vivid colors of the glass are reflected in splashes of colored light on the stone floors.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;