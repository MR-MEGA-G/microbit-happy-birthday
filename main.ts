let playing = false

let happyBirthday: string[] = [
    "C4:4", "C4:4", "D4:8", "C4:8", "F4:8", "E4:16",
    "C4:4", "C4:4", "D4:8", "C4:8", "G4:8", "F4:16",
    "C4:4", "C4:4", "C5:8", "A4:8", "F4:8", "E4:8", "D4:16",
    "Bb4:4", "Bb4:4", "A4:8", "F4:8", "G4:8", "F4:16"
]

input.onButtonPressed(Button.A, function () {
    if (!playing) {
        playing = true
        basic.showIcon(IconNames.Heart)

        // ✅ FIX IS HERE — NO .join()
        music.beginMelody(happyBirthday, MelodyOptions.Once)

        basic.pause(6000)
        playing = false
        basic.showIcon(IconNames.Happy)
    }
})

input.onButtonPressed(Button.B, function () {
    music.stopMelody(MelodyStopOptions.All)
    playing = false
    basic.showIcon(IconNames.No)
})