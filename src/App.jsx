import Sound from "react-sound";
import Song from "./song.mp3";

function App() {
	return (
		<>
			<div class="birthday-gift">
				<div class="gift">
					<input id="click" type="checkbox" />
					<label class="click" for="click"></label>
					<div class="wishes">
						<img
							src="https://cdn-icons-png.flaticon.com/512/3468/3468377.png"
							alt="cat"
							className="cat-img"
						/>
						<p>Happy birthday babiboo!</p>
					</div>
					<div class="sparkles">
						<div class="spark1"></div>
						<div class="spark2"></div>
						<div class="spark3"></div>
						<div class="spark4"></div>
						<div class="spark5"></div>
						<div class="spark6"></div>
					</div>
				</div>
			</div>
			<Sound url={Song} playStatus="PLAYING" />
		</>
	);
}

export default App;
