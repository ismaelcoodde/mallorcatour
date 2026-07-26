import subprocess
import sys


def run():
    subprocess.run(
        [sys.executable, "-m", "uvicorn", "app.main:app", "--reload", "--port", "8000"],
        cwd="backend",
    )


if __name__ == "__main__":
    run()
